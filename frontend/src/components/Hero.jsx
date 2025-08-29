import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";


// Animated Typing Text Component - Optimized
const AnimatedTypingText = React.memo(() => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

 const { t } = useTranslation();
  const texts = useMemo(() => t("home.hero.rotating", { returnObjects: true }), [t]);

  useEffect(() => {
    const currentFullText = texts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 80; // Slightly faster for smoother feel
    const pauseTime = isDeleting ? 300 : 1500; // Reduced pause times

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (displayText.length > 2) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 text-center px-4">
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="ml-1 text-blue-400"
        >
          |
        </motion.span>
      </h2>
    </div>
  );
});

// Optimized Neural Network Background Component
const NeuralNetworkBackground = React.memo(() => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef([]);
  const animationIdRef = useRef();
  const lastFrameTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Optimized animation with requestAnimationFrame throttling
    const animate = () => {
      const now = performance.now();
      const deltaTime = now - lastFrameTime.current;
      
      // Throttle to ~60fps max, skip frames if needed
      if (deltaTime < 16.67) {
        animationIdRef.current = requestAnimationFrame(animate);
        return;
      }
      
      lastFrameTime.current = now;
      
      const ctx = canvas.getContext('2d');
      const time = now * 0.001;
      const mouse = mouseRef.current;
      
      // Clear with black background
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const nodeCount = nodes.length;
      
      // Update and draw nodes in batches for better performance
      for (let i = 0; i < nodeCount; i++) {
        const node = nodes[i];
        
        // Mouse interaction - optimized distance calculation
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const distanceSquared = dx * dx + dy * dy;
        const maxDistanceSquared = 40000; // 200px squared
        
        if (distanceSquared < maxDistanceSquared && mouse.x > -500) {
          const distance = Math.sqrt(distanceSquared);
          const force = (200 - distance) / 200;
          const angle = Math.atan2(dy, dx);
          
          const repulsionStrength = force * force * 40; // Slightly reduced
          node.x -= Math.cos(angle) * repulsionStrength;
          node.y -= Math.sin(angle) * repulsionStrength;
          
          node.glowIntensity = Math.min(1.8, node.glowIntensity + force * 2);
        } else {
          node.x += (node.originalX - node.x) * 0.04;
          node.y += (node.originalY - node.y) * 0.04;
          node.glowIntensity = Math.max(0.6, node.glowIntensity * 0.96);
        }
        
        // Reduced floating movement calculations
        const timeOffset = time + i * 0.1;
        node.x += Math.sin(timeOffset) * 0.6;
        node.y += Math.cos(timeOffset * 0.8) * 0.4;
        
        // Simplified drift movement
        node.originalX += node.vx * 0.2;
        node.originalY += node.vy * 0.2;
        
        // Optimized boundary checking
        if (node.originalX < 40 || node.originalX > canvas.width - 40) {
          node.vx *= -1;
          node.originalX = Math.max(40, Math.min(canvas.width - 40, node.originalX));
        }
        if (node.originalY < 40 || node.originalY > canvas.height - 40) {
          node.vy *= -1;
          node.originalY = Math.max(40, Math.min(canvas.height - 40, node.originalY));
        }
        
        // Keep in bounds
        node.x = Math.max(node.radius, Math.min(canvas.width - node.radius, node.x));
        node.y = Math.max(node.radius, Math.min(canvas.height - node.radius, node.y));
        
        // Simplified pulse effect
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.8;
        const currentRadius = node.radius * pulse;
        const currentOpacity = node.opacity * pulse;
        
        // Optimized glow rendering - enhanced visibility
        const glowRadius = currentRadius * 4 * node.glowIntensity; // Increased glow size
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        );
        gradient.addColorStop(0, `rgba(59, 130, 246, ${currentOpacity * 0.5 * node.glowIntensity})`); // Increased opacity
        gradient.addColorStop(0.3, `rgba(59, 130, 246, ${currentOpacity * 0.2 * node.glowIntensity})`);
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Main node - enhanced visibility
        ctx.fillStyle = `rgba(59, 130, 246, ${currentOpacity * node.glowIntensity * 0.9})`; // Increased opacity
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Bright center - more visible
        ctx.fillStyle = `rgba(147, 197, 253, ${currentOpacity * node.glowIntensity * 0.8})`; // Increased opacity
        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius * 0.5, 0, Math.PI * 2); // Increased center size
        ctx.fill();
      }
      
      // Enhanced connections - more visible
      ctx.lineWidth = 1;
      const connectionDistance = 120; // Increased back to 120
      const connectionDistanceSquared = connectionDistance * connectionDistance;
      
      for (let i = 0; i < nodeCount; i++) {
        const nodeA = nodes[i];
        // Check more connections for better network effect
        for (let j = i + 1; j < nodeCount; j++) {
          const nodeB = nodes[j];
          
          const dx = nodeA.x - nodeB.x;
          const dy = nodeA.y - nodeB.y;
          const distanceSquared = dx * dx + dy * dy;
          
          if (distanceSquared < connectionDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);
            const opacity = ((connectionDistance - distance) / connectionDistance) * 0.4; // Increased opacity
            
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodeA.x, nodeA.y);
            ctx.lineTo(nodeB.x, nodeB.y);
            ctx.stroke();
            
            // More frequent special effects
            if (Math.random() < 0.005) {
              ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 2})`;
              ctx.lineWidth = 2;
              ctx.stroke();
              ctx.lineWidth = 1;
            }
            
            // Enhanced data packet animation
            if (Math.random() < 0.004) {
              const t = Math.sin(time * 5) * 0.5 + 0.5;
              const packetX = nodeA.x + dx * t;
              const packetY = nodeA.y + dy * t;
              
              ctx.fillStyle = `rgba(147, 197, 253, ${opacity * 3})`;
              ctx.beginPath();
              ctx.arc(packetX, packetY, 2, 0, Math.PI * 2); // Larger packets
              ctx.fill();
            }
          }
        }
      }
      
      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Optimized canvas setup
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR for performance
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      const ctx = canvas.getContext('2d');
      ctx.scale(dpr, dpr);
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      
      // Reinitialize nodes with optimized count
      initNodes();
    };

    // Optimized node initialization
    const initNodes = () => {
      const rect = canvas.getBoundingClientRect();
      const area = rect.width * rect.height;
      const nodeCount = Math.min(80, Math.max(40, Math.floor(area / 10000))); // Increased node count
      
      nodesRef.current = new Array(nodeCount);
      
      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        nodesRef.current[i] = {
          x,
          y,
          originalX: x,
          originalY: y,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2.5 + 1.5, // Increased size
          opacity: Math.random() * 0.6 + 0.5, // Increased opacity
          pulsePhase: Math.random() * Math.PI * 2,
          glowIntensity: Math.random() * 0.5 + 0.8, // Increased glow
        };
      }
    };

    // Mouse handlers
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleMouseEnter = () => {
      canvas.style.cursor = 'crosshair';
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
      canvas.style.cursor = 'default';
    };

    // Throttled resize handler
    let resizeTimer;
    const throttledResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeCanvas, 150);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener('resize', throttledResize);
    canvas.addEventListener('mousemove', handleMouseMove, { passive: true });
    canvas.addEventListener('mouseenter', handleMouseEnter);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Start animation
    animate();

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', throttledResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseenter', handleMouseEnter);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: '#000000' }}
    />
  );
});

const Hero = ({ onNotImplemented }) => {
  const { t } = useTranslation();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-black">
      {/* Neural Network Background */}
      <NeuralNetworkBackground />
      
      {/* Subtle overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      
      <div className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 sm:space-y-12"
        >
          {/* Main Heading */}
          <div className="space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-xs sm:text-sm font-medium backdrop-blur-sm"
            >
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              {t("home.hero.badge")}
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                 {t("home.hero.title_line1")}
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                {t("home.hero.title_line2")}
              </span>
            </h1>
            
            {/* Animated Rotating Typing Effect */}
            <AnimatedTypingText />
          </div>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
          >
           {t("home.hero.subtitle")}
          </motion.p>
          
          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
          >
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full sm:w-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-lg opacity-60 group-hover:opacity-100 transition-opacity"></div>
              <Button 
                className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full px-6 py-5 sm:px-8 md:px-10 sm:py-6 md:py-7 text-base sm:text-lg font-semibold shadow-2xl border border-blue-500/50 w-full sm:w-auto"
                size="lg"
              >
                {t("home.hero.cta_primary")}
                <motion.div
                  className="ml-2 inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </Button>
            </motion.a>
            
            <motion.a 
  href="/services"
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.98 }}
  className="group w-full sm:w-auto"
>
  <Button 
    variant="outline" 
    className="
      relative 
      border-2 border-black 
      text-black 
      bg-white 
      hover:bg-black 
      hover:text-white 
      hover:border-white
      rounded-full 
      px-6 py-5 sm:px-8 md:px-10 sm:py-6 md:py-7 
      text-base sm:text-lg font-semibold 
      shadow-xl 
      transition-all duration-300 
      w-full sm:w-auto
    "
    size="lg"
  >
    <span className="relative z-10">{t("home.hero.cta_secondary")}</span>
    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </Button>
</motion.a>

          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute left-1/2 transform -translate-x-1/2 -bottom-[70px] md:-bottom-[50px] lg:-bottom-[80px]"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center text-gray-400"
            >
              <span className="text-xs mb-2 uppercase tracking-wider hidden sm:block"> {t("home.hero.scroll")}</span>
              <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;