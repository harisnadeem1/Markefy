import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight, TrendingUp, ShieldCheck, Layers, Eye,
    Sliders, CheckCircle, Sparkles, Target, Zap,
    BarChart3, Activity, Droplets, Flame, Clock,
    AlertCircle, Settings, LineChart, DollarSign,
    Lock, Users, Award, Download
} from "lucide-react";

const StepCard = ({ number, icon: Icon, title, text, color }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className={`w-12 h-12 bg-${color}-100 rounded-2xl flex items-center justify-center mb-4`}>
            <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
        <div className="text-sm font-bold text-gray-400 mb-2">STEP {number}</div>
        <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{text}</p>
    </motion.div>
);

const PineScriptPage = () => {
    const [activeModule, setActiveModule] = useState(0);

    const modules = [
        {
            id: 1,
            icon: TrendingUp,
            title: "Trend Engine",
            description: "ATR-based trend detection that adapts to market volatility",
            features: [
                "Dynamic ATR calculation with customizable periods",
                "Automatic trend line plotting (green for uptrend, red for downtrend)",
                "Optional background tinting for clear visual confirmation",
                "Real-time trend bias detection (-1, 0, 1)"
            ],
            color: "blue"
        },
        {
            id: 2,
            icon: Target,
            title: "Major Breakout (HTF)",
            description: "Identifies significant breakouts from 250-bar highs/lows (≈ 1 year on daily)",
            features: [
                "Tracks highest high and lowest low over 250 periods",
                "MA alignment filter (50, 150, 200 SMAs) for quality confirmation",
                "Only signals when price decisively breaks major levels",
                "Displays 'HTF' labels for higher timeframe breakouts"
            ],
            color: "lime"
        },
        {
            id: 3,
            icon: Layers,
            title: "Structure Breakout",
            description: "Fractal-based support and resistance detection with volume confirmation",
            features: [
                "Identifies fractals using 5-bar pattern recognition",
                "Volume filter ensures institutional activity",
                "Plots dynamic support/resistance levels",
                "Optional trend alignment requirement for higher accuracy"
            ],
            color: "cyan"
        },
        {
            id: 4,
            icon: Droplets,
            title: "Liquidity Sweep",
            description: "Detects when price sweeps liquidity pools and reverses",
            features: [
                "Tracks session highs and lows dynamically",
                "Identifies when price takes out stops and reverses",
                "Configurable lookback period (default 10 bars)",
                "Visual 💧 markers for sweep confirmations"
            ],
            color: "blue"
        },
        {
            id: 5,
            icon: Activity,
            title: "Volatility Filter",
            description: "Bollinger Bands-based expansion/contraction detection",
            features: [
                "26-period BB with 2.0 standard deviation",
                "Detects expanding volatility (trending markets)",
                "Identifies contracting volatility (consolidation)",
                "Bar coloring for quick visual reference"
            ],
            color: "green"
        },
        {
            id: 6,
            icon: Flame,
            title: "Candle Confirmation",
            description: "Bullish and bearish engulfing pattern detection",
            features: [
                "True engulfing patterns with body percentage filter",
                "Minimum 50% body requirement (customizable)",
                "Must engulf previous candle's range completely",
                "Filters out weak or indecisive patterns"
            ],
            color: "orange"
        },
        {
            id: 7,
            icon: Clock,
            title: "Market Context (Killzones)",
            description: "ICT-inspired institutional session tracking",
            features: [
                "Asia session (2000-0000)",
                "London session (0200-0500)",
                "NY AM session (0800-1200)",
                "Customizable timezone settings (GMT-12 to GMT+12)",
                "Visual session boxes with dynamic high/low tracking"
            ],
            color: "indigo"
        }
    ];

    const presets = [
        {
            name: "Beginner Mode",
            icon: Users,
            description: "Clean charts, simple signals",
            features: [
                "Core modules only: Trend + Breakouts",
                "Minimal visual clutter",
                "Fast decision-making",
                "Perfect for new traders"
            ],
            requirements: "Requires Major OR Structure breakout + Trend alignment"
        },
        {
            name: "Advanced Mode",
            icon: Award,
            description: "Maximum confluence for quality",
            features: [
                "All confirmations enabled",
                "Engulfing filter active",
                "Volatility expansion required",
                "Highest quality signals"
            ],
            requirements: "Requires Trend + Breakout + Engulfing + Volatility"
        },
        {
            name: "Custom Mode",
            icon: Settings,
            description: "Full control over every filter",
            features: [
                "Toggle each module independently",
                "Create your own strategy",
                "Fine-tune for your style",
                "Maximum flexibility"
            ],
            requirements: "Configure manually based on your preferences"
        }
    ];

    const benefits = [
        {
            icon: CheckCircle,
            title: "All-in-One Solution",
            description: "7 powerful modules unified into one clean indicator"
        },
        {
            icon: Zap,
            title: "No Clutter",
            description: "Clear BUY/SELL signals without overwhelming your chart"
        },
        {
            icon: BarChart3,
            title: "Multi-Timeframe",
            description: "Works on any market and timeframe from 1m to 1D+"
        },
        {
            icon: Lock,
            title: "Battle-Tested Logic",
            description: "Built on proven concepts: ATR trends, fractals, ICT killzones"
        },
        {
            icon: Eye,
            title: "Live Dashboard",
            description: "Real-time status panel showing all module states"
        }
        // ,
        // {
        //     icon: AlertCircle,
        //     title: "Smart Alerts",
        //     description: "6 customizable alert conditions for automated trading"
        // }
    ];

    const alerts = [
        "🟢 Buy Signal - Full confluence met",
        "🔴 Sell Signal - Full confluence met",
        "🚀 Major Breakout Up - HTF resistance broken",
        "⚠️ Major Breakout Down - HTF support broken",
        "📈 Trend Bullish - Trend changed to uptrend",
        "📉 Trend Bearish - Trend changed to downtrend"
    ];

    return (
        <div className="bg-white text-gray-900">

            {/* ================= HERO ================= */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-20 right-20 w-60 h-60 bg-blue-600 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-blue-600 text-sm font-semibold mb-6"
                            >
                                <Sparkles className="w-4 h-4 mr-2" />
                                Professional TradingView Indicator
                            </motion.div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
                                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                    Market Structure Pro
                                </span>
                            </h1>

                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8">
                                Stop juggling 10 different indicators. Get clear <span className="font-bold text-blue-600">BUY</span> and <span className="font-bold text-red-600">SELL</span> signals from one powerful tool that combines trend, structure, breakouts, liquidity, volatility, and candle confirmation.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    Get Access Now
                                    <ArrowRight className="ml-3 w-5 h-5" />
                                </motion.button>

                                
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">7</div>
                                    <div className="text-sm text-gray-600">Modules</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">3</div>
                                    <div className="text-sm text-gray-600">Presets</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600">∞</div>
                                    <div className="text-sm text-gray-600">Markets</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl shadow-2xl overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="/pine/chart.png"
                                        alt="Market Structure Pro Chart Preview"
                                        className="w-full h-full object-cover rounded-2xl shadow-lg"
                                        loading="lazy"
                                    />
                                </div>


                                {/* Decorative elements */}
                                <div className="absolute top-4 left-4 w-32 h-1 bg-green-500 rounded-full opacity-50"></div>
                                <div className="absolute bottom-4 right-4 w-24 h-1 bg-red-500 rounded-full opacity-50"></div>
                            </div>

                            {/* Floating badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-2xl font-bold shadow-lg"
                            >
                                BUY
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                                className="absolute -bottom-4 -left-4 bg-red-500 text-white px-4 py-2 rounded-2xl font-bold shadow-lg"
                            >
                                SELL
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ================= PROBLEM ================= */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-red-600" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold">The Problem</h2>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                                Most traders suffer from <span className="font-bold text-gray-900">"indicator overload"</span>. They stack trend indicators, oscillators, volume tools, and pattern scanners on the same chart, hoping more indicators = better decisions.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    The result? <span className="font-bold">Conflicting signals, analysis paralysis, and missed opportunities</span>. One indicator says buy while another says sell. By the time you reconcile them, the move is over.
                                </p>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Jumping between RSI, MACD, support/resistance levels, volume profiles, and candlestick patterns creates confusion instead of clarity. Your chart becomes a maze, not a map.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= SOLUTION ================= */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold">The Solution</h2>
                        </div>

                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-10">
                            Market Structure Pro solves this by <span className="font-bold text-gray-900">combining 7 professional trading concepts into one unified system</span>. You get all the analysis you need without the clutter.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, i) => {
                                const IconComponent = benefit.icon;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                                            <IconComponent className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                                            <p className="text-gray-600">{benefit.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= MODULES ================= */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">7 Powerful Modules</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Each module is a professional trading system on its own. Together, they create unbeatable confluence.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {modules.map((module, index) => {
                            const IconComponent = module.icon;
                            return (
                                <motion.div
                                    key={module.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gray-50 rounded-3xl p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                    onClick={() => setActiveModule(index)}
                                >
                                    <div className={`w-14 h-14 bg-${module.color}-100 rounded-2xl flex items-center justify-center mb-4`}>
                                        <IconComponent className={`w-7 h-7 text-${module.color}-600`} />
                                    </div>

                                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                                        Module {module.id}: {module.title}
                                    </h3>

                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {module.description}
                                    </p>

                                    <ul className="space-y-2">
                                        {module.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= HOW IT WORKS ================= */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How It Works</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Market Structure Pro uses a 3-stage confluence system to filter out noise and show only high-probability setups.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        <StepCard
                            number="1"
                            icon={TrendingUp}
                            title="Trend Detection"
                            text="First, the ATR-based trend engine identifies overall market direction. No counter-trend trades allowed."
                            color="blue"
                        />
                        <StepCard
                            number="2"
                            icon={Layers}
                            title="Structure & Breakouts"
                            text="Then, it waits for significant structure breaks or major HTF breakouts that signal institutional activity."
                            color="indigo"
                        />
                        <StepCard
                            number="3"
                            icon={ShieldCheck}
                            title="Smart Confirmation"
                            text="Finally, it validates with liquidity sweeps, volatility expansion, and engulfing candles before signaling."
                            color="green"
                        />
                    </div>

                    {/* Flow Diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-3xl p-8 shadow-lg"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex-1 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <TrendingUp className="w-8 h-8 text-blue-600" />
                                </div>
                                <p className="font-bold text-gray-900">Trend</p>
                            </div>

                            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

                            <div className="flex-1 text-center">
                                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Target className="w-8 h-8 text-indigo-600" />
                                </div>
                                <p className="font-bold text-gray-900">Breakout</p>
                            </div>

                            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

                            <div className="flex-1 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <ShieldCheck className="w-8 h-8 text-green-600" />
                                </div>
                                <p className="font-bold text-gray-900">Confirmation</p>
                            </div>

                            <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />

                            <div className="flex-1 text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <Sparkles className="w-8 h-8 text-white" />
                                </div>
                                <p className="font-bold text-transparent bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text">
                                    SIGNAL
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= TRADING MODES ================= */}
            <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">3 Trading Modes</h2>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose your style: Simple and fast, maximum quality, or fully customizable.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {presets.map((preset, index) => {
                            const IconComponent = preset.icon;
                            return (
                                <motion.div
                                    key={preset.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 hover:shadow-xl transition-all"
                                >
                                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{preset.name}</h3>
                                    <p className="text-gray-600 mb-6">{preset.description}</p>

                                    <div className="space-y-3 mb-6">
                                        {preset.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-2">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                                        <p className="text-xs font-semibold text-blue-900 mb-1">REQUIREMENTS:</p>
                                        <p className="text-sm text-blue-700">{preset.requirements}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ================= DASHBOARD ================= */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <Eye className="w-6 h-6 text-blue-600" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold">What You'll See</h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">On Your Chart</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-xs">BUY</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Clear BUY Labels</p>
                                            <p className="text-sm text-gray-600">Large green labels when all conditions align</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-white font-bold text-xs">SELL</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Clear SELL Labels</p>
                                            <p className="text-sm text-gray-600">Large red labels for short setups</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Target className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900">HTF Breakout Markers</p>
                                            <p className="text-sm text-gray-600">Triangles marking major timeframe breaks</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Layers className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900">Structure Levels</p>
                                            <p className="text-sm text-gray-600">Dynamic support/resistance with cross markers</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-bold text-gray-900">Liquidity Sweeps</p>
                                            <p className="text-sm text-gray-600">💧 emojis when price sweeps stops</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white rounded-3xl p-8 shadow-sm">
                                <h3 className="text-xl font-bold mb-6 text-gray-900">Live Dashboard</h3>
                                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between items-center border-b border-gray-700 pb-3">
                                            <span className="font-semibold">MODULE</span>
                                            <span className="font-semibold">STATUS</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Trend:</span>
                                            <span className="text-green-400 font-bold">🟢 BULL</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Major BO:</span>
                                            <span className="text-yellow-400">✓ ACTIVE</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Structure:</span>
                                            <span className="text-cyan-400">✓ BREAK</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Liquidity:</span>
                                            <span className="text-blue-400">💧 SWEPT</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Volatility:</span>
                                            <span className="text-green-400">📈 EXPAND</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-gray-300">Session:</span>
                                            <span className="text-purple-400">🇺🇸 NY</span>
                                        </div>
                                        <div className="flex justify-between items-center border-t border-gray-700 pt-3">
                                            <span className="text-gray-300">Mode:</span>
                                            <span className="text-yellow-400 font-bold">Advanced</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-3xl p-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Optional Visuals (You Control)</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Trend line plotting (green/red)</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Background tinting for trend</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Killzone session boxes</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">Volatility bar coloring</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= ALERTS ================= */}
            {/* <section className="py-16 sm:py-24 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                                <AlertCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-bold">Smart Alert System</h2>
                        </div>

                        <p className="text-lg text-gray-600 mb-10">
                            Never miss a setup again. Market Structure Pro includes 6 customizable alert conditions that can notify you via TradingView app, email, or webhook.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {alerts.map((alert, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl"
                                >
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <span className="text-xl">{alert.split(' ')[0]}</span>
                                    </div>
                                    <span className="text-gray-700 font-medium">{alert.substring(alert.indexOf(' ') + 1)}</span>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-10 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-3xl p-8">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Alert Message Format</h3>
                            <div className="bg-white rounded-2xl p-6 font-mono text-sm">
                                <p className="text-gray-600 mb-2">Example alert message:</p>
                                <p className="text-blue-600">
                                    <span className="text-gray-900">BTCUSD</span> - BUY Signal Generated | Price: <span className="text-gray-900">45,234.50</span>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section> */}

            {/* ================= SPECIFICATIONS ================= */}
            <section className="py-16 sm:py-24 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Specifications</h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-3xl p-8 text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BarChart3 className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Markets</h3>
                                <p className="text-gray-600">
                                    Works on stocks, forex, crypto, indices, commodities - any market TradingView supports
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Timeframes</h3>
                                <p className="text-gray-600">
                                    Optimized for 15m to 1D, but works on any timeframe from 1m to 1W
                                </p>
                            </div>

                            <div className="bg-white rounded-3xl p-8 text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Settings className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">Customization</h3>
                                <p className="text-gray-600">
                                    30+ input parameters to fine-tune every aspect of the indicator
                                </p>
                            </div>
                        </div>

                        <div className="mt-12 bg-white rounded-3xl p-8">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">Key Parameters</h3>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    { label: "ATR Period", value: "10 (adjustable)" },
                                    { label: "ATR Multiplier", value: "0.8 (adjustable)" },
                                    { label: "Major Lookback", value: "250 bars (≈1 year)" },
                                    { label: "MA Lengths", value: "50, 150, 200 SMA" },
                                    { label: "Liquidity Lookback", value: "10 bars (adjustable)" },
                                    { label: "BB Length", value: "26 periods" },
                                    { label: "BB Multiplier", value: "2.0 std dev" },
                                    { label: "Min Body %", value: "50% (engulfing)" },
                                    { label: "Killzone Sessions", value: "Asia, London, NY AM" }
                                ].map((param, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
                                        <span className="font-semibold text-gray-700">{param.label}:</span>
                                        <span className="text-blue-600 font-mono text-sm">{param.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-60 h-60 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-600 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-semibold mb-8">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Limited Time Offer
                        </div>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Stop Guessing. Start Trading With{" "}
                            <span className="text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text">
                                Confidence
                            </span>
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join hundreds of traders who simplified their charts and improved their decision-making with Market Structure Pro.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/50 transition-shadow"
                            >
                                Get Instant Access
                                <ArrowRight className="ml-3 w-5 h-5" />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
                            >
                                View Documentation
                                <Download className="ml-3 w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            {[
                                { icon: CheckCircle, text: "One-time payment" },
                                { icon: Lock, text: "Lifetime access" },
                                { icon: Zap, text: "Instant delivery" },
                                { icon: ShieldCheck, text: "30-day guarantee" }
                            ].map((item, i) => {
                                const IconComponent = item.icon;
                                return (
                                    <div key={i} className="flex flex-col items-center gap-2">
                                        <IconComponent className="w-6 h-6 text-blue-400" />
                                        <span className="text-sm text-gray-300">{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PineScriptPage;