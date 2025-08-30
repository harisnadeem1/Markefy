import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useCart } from "@/context/CartContext";

// 🔹 Dummy snippet items (replace with your real data if you have @/data/products)
const snippetItems = [
    { title: 'All Sections', href: '/shop/collection' },
    { title: 'Trust Sections', href: '/shop/collection/trust-sections' },
    { title: 'Testimonial Sections', href: '/shop/collection/testimonial-sections' },
    { title: 'Conversion Sections', href: '/shop/collection/conversion-sections' },
    { title: 'Slider Sections', href: '/shop/collection/slider-sections' },
    { title: 'Feature Sections', href: '/shop/collection/feature-sections' },
    { title: 'Content Sections', href: '/shop/collection/content-sections' },
    { title: 'Effect Sections', href: '/shop/collection/effect-sections' },
];

const aboutItems = [
    { title: 'About Us', href: 'shop/about', description: 'Learn more about our mission and team.' },
    { title: 'What Are Code Snippets?', href: '/shop/what-are-code-snippets', description: 'Discover how snippets can save you time.' },
];

const customSnippetItems = [
    { title: 'Custom Website Request', href: '/shop/website-request', description: 'Get a quote for a full website build.' },
    { title: 'Section Requests / Suggestions', href: '/shop/suggestion-form', description: 'Suggest a new snippet for our store.' },
];

const ListItem = React.forwardRef(({ className, title, children, to, isDark, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={to}
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors',
                        isDark 
                            ? 'text-white hover:text-gray-300' 
                            : 'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className
                    )}
                    {...props}
                >
                    <div className={cn(
                        "text-sm font-medium leading-none",
                        isDark ? "text-white" : ""
                    )}>{title}</div>
                    <p className={cn(
                        "line-clamp-2 text-sm leading-snug",
                        isDark ? "text-gray-400" : "text-muted-foreground"
                    )}>
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

const MobileMenuSection = ({ title, items, isOpen, onToggle, onItemClick, isDark }) => (
    <div className={cn("border-b", isDark ? "border-gray-700" : "border-gray-100")}>
        <button
            onClick={onToggle}
            className={cn(
                "w-full flex items-center justify-between py-4 px-6 text-left transition-colors",
                isDark 
                    ? "text-white hover:bg-gray-800" 
                    : "text-gray-900 hover:bg-gray-50"
            )}
        >
            {title}
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown className="h-5 w-5" />
            </motion.div>
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                >
                    <div className="pl-6 pb-4">
                        {items.map((item) => (
                            <Link
                                key={item.title}
                                to={item.href}
                                onClick={onItemClick}
                                className={cn(
                                    "block py-2 px-4 text-sm rounded-md transition-colors",
                                    isDark 
                                        ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const Header = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [openSection, setOpenSection] = React.useState(null);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const { itemCount } = useCart();
    const location = useLocation();

    // Add scroll effect - this is the key addition
    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isCollectionPage = location.pathname.startsWith("/shop/collection");
    
    // Determine if we should use dark theme
    const isDarkHeader = isCollectionPage && !isScrolled;

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
        setOpenSection(null);
    };

    return (
        <>
            {/* Updated header with floating effect */}
            <header className={`${isScrolled ? 'fixed' : 'sticky'} top-0 z-[1000] w-full transition-all duration-300 ${isScrolled ? 'pt-4' : ''}`}>
                <div className={`${isScrolled
                        ? 'max-w-[90%] mx-auto rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg border border-gray-200'
                        : isDarkHeader
                            ? 'bg-black w-full'
                            : 'bg-white backdrop-blur-sm border-b border-gray-200 w-full'
                    } transition-all duration-300`}>
                    <div className="px-4 sm:px-6 lg:px-8 w-full">
                        {/* Desktop Layout */}
                        <div className="hidden md:grid md:grid-cols-3 items-center h-16 w-full">
                            {/* LEFT Nav */}
                            <nav className="flex items-center space-x-1">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className={cn(
                                                "bg-transparent transition-colors",
                                                isDarkHeader ? "text-white hover:text-gray-300 data-[state=open]:text-gray-300" : ""
                                            )}>About</NavigationMenuTrigger>
                                            <NavigationMenuContent className={isDarkHeader ? "bg-black border-gray-700" : ""}>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    {aboutItems.map((item) => (
                                                        <ListItem key={item.title} title={item.title} to={item.href} isDark={isDarkHeader}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>

                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className={cn(
                                                "bg-transparent transition-colors",
                                                isDarkHeader ? "text-white hover:text-gray-300 data-[state=open]:text-gray-300" : ""
                                            )}>Code Snippets</NavigationMenuTrigger>
                                            <NavigationMenuContent className={isDarkHeader ? "bg-black border-gray-700" : ""}>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                    {snippetItems.map((item) => (
                                                        <ListItem key={item.title} title={item.title} to={item.href} isDark={isDarkHeader}>
                                                            Browse our collection of {item.title.toLowerCase()}.
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>

                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className={cn(
                                                "bg-transparent transition-colors",
                                                isDarkHeader ? "text-white hover:text-gray-300 data-[state=open]:text-gray-300" : ""
                                            )}>Custom Snippets</NavigationMenuTrigger>
                                            <NavigationMenuContent className={isDarkHeader ? "bg-black border-gray-700" : ""}>
                                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                                                    {customSnippetItems.map((item) => (
                                                        <ListItem key={item.title} title={item.title} to={item.href} isDark={isDarkHeader}>
                                                            {item.description}
                                                        </ListItem>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>

                                        <NavigationMenuItem>
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    to="/"
                                                    className={cn(
                                                        navigationMenuTriggerStyle(), 
                                                        "bg-transparent transition-colors",
                                                        isDarkHeader ? "text-white hover:text-gray-300 hover:bg-gray-800" : ""
                                                    )}
                                                >
                                                    Services
                                                </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </nav>

                            {/* CENTER Logo */}
                            <div className="flex justify-center">
                                <Link to="/shop" className="flex items-center space-x-2">
                                    <img
                                        src={isDarkHeader ? "/logo/Markefy-white.png" : "/logo/Markefy-black.png"}
                                        alt="Markefy Shop Logo"
                                        className="h-6 w-auto"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </Link>
                            </div>

                            {/* RIGHT */}
                            <div className="flex justify-end items-center gap-4">
                                <Link to="/shop/contact" className={cn(
                                    navigationMenuTriggerStyle(), 
                                    "bg-transparent transition-colors",
                                    isDarkHeader ? "text-white hover:text-gray-300 hover:bg-gray-800" : ""
                                )}>
                                    Contact
                                </Link>
                                <Link to="/shop/faq" className={cn(
                                    navigationMenuTriggerStyle(), 
                                    "bg-transparent transition-colors",
                                    isDarkHeader ? "text-white hover:text-gray-300 hover:bg-gray-800" : ""
                                )}>
                                    FAQ
                                </Link>
                                <Link to="/shop/orders" className={cn(
                                    navigationMenuTriggerStyle(), 
                                    "bg-transparent transition-colors",
                                    isDarkHeader ? "text-white hover:text-gray-300 hover:bg-gray-800" : ""
                                )}>
                                    My Orders
                                </Link>
                                <Link to="/shop/cart" className={cn(
                                    "relative p-2 rounded-full transition-colors",
                                    isDarkHeader ? "hover:bg-gray-800" : "hover:bg-gray-100"
                                )}>
                                    <ShoppingCart className={cn(
                                        "h-6 w-6",
                                        isDarkHeader ? "text-white" : "text-gray-600"
                                    )} />
                                    {itemCount > 0 && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                                        >
                                            {itemCount}
                                        </motion.span>
                                    )}
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Layout */}
                        <div className="md:hidden flex items-center justify-between h-16">
                            {/* LEFT: Menu */}
                            <button onClick={() => setIsOpen(!isOpen)} className={cn(
                                "p-2 rounded-lg transition-colors",
                                isDarkHeader ? "hover:bg-gray-800" : "hover:bg-gray-100"
                            )}>
                                {isOpen ? (
                                    <X className={cn("h-6 w-6", isDarkHeader ? "text-white" : "text-gray-600")} />
                                ) : (
                                    <Menu className={cn("h-6 w-6", isDarkHeader ? "text-white" : "text-gray-600")} />
                                )}
                            </button>

                            <div className="flex justify-center">
                                <Link to="/shop" className="flex items-center space-x-2">
                                    <img
                                        src={isDarkHeader ? "/logo/Markefy-white.png" : "/logo/Markefy-black.png"}
                                        alt="Markefy Shop Logo"
                                        className="h-5 w-auto"
                                        loading="eager"
                                        decoding="async"
                                    />
                                </Link>
                            </div>

                            {/* RIGHT: Cart */}
                            <Link to="/shop/cart" className={cn(
                                "relative p-2 rounded-full transition-colors",
                                isDarkHeader ? "hover:bg-gray-800" : "hover:bg-gray-100"
                            )}>
                                <ShoppingCart className={cn(
                                    "h-6 w-6",
                                    isDarkHeader ? "text-white" : "text-gray-600"
                                )} />
                                {itemCount > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                                    >
                                        {itemCount}
                                    </motion.span>
                                )}
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1200] md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[1201]"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className={cn(
                                "fixed left-0 top-0 h-full w-80 shadow-2xl overflow-y-auto z-[1202]",
                                isDarkHeader ? "bg-black" : "bg-white"
                            )}
                        >
                            <div className={cn(
                                "flex items-center justify-between p-6 border-b",
                                isDarkHeader ? "border-gray-700" : "border-gray-100"
                            )}>
                                <div className="flex items-center space-x-2">
                                    <Code className="h-6 w-6 text-blue-600" />
                                    <span className={cn(
                                        "text-lg font-bold",
                                        isDarkHeader ? "text-white" : "text-gray-900"
                                    )}>Menu</span>
                                </div>
                                <button onClick={closeMobileMenu} className={cn(
                                    "p-2 rounded-lg transition-colors",
                                    isDarkHeader ? "hover:bg-gray-800" : "hover:bg-gray-100"
                                )}>
                                    <X className={cn(
                                        "h-5 w-5",
                                        isDarkHeader ? "text-gray-400" : "text-gray-500"
                                    )} />
                                </button>
                            </div>

                            <div className="py-2">
                                <MobileMenuSection
                                    title="About"
                                    items={aboutItems}
                                    isOpen={openSection === 'about'}
                                    onToggle={() => toggleSection('about')}
                                    onItemClick={closeMobileMenu}
                                    isDark={isDarkHeader}
                                />
                                <MobileMenuSection
                                    title="Code Snippets"
                                    items={snippetItems}
                                    isOpen={openSection === 'snippets'}
                                    onToggle={() => toggleSection('snippets')}
                                    onItemClick={closeMobileMenu}
                                    isDark={isDarkHeader}
                                />
                                <MobileMenuSection
                                    title="Custom Snippets"
                                    items={customSnippetItems}
                                    isOpen={openSection === 'custom'}
                                    onToggle={() => toggleSection('custom')}
                                    onItemClick={closeMobileMenu}
                                    isDark={isDarkHeader}
                                />

                                <div className={cn(
                                    "border-t mt-4",
                                    isDarkHeader ? "border-gray-700" : "border-gray-100"
                                )}>
                                    <Link to="/" onClick={closeMobileMenu} className={cn(
                                        "block py-4 px-6 transition-colors",
                                        isDarkHeader ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"
                                    )}>
                                        Services
                                    </Link>

                                    <Link to="/shop/contact" onClick={closeMobileMenu} className={cn(
                                        "block py-4 px-6 transition-colors",
                                        isDarkHeader ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"
                                    )}>
                                        Contact
                                    </Link>
                                    <Link to="/shop/faq" onClick={closeMobileMenu} className={cn(
                                        "block py-4 px-6 transition-colors",
                                        isDarkHeader ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"
                                    )}>
                                        FAQ
                                    </Link>
                                    <Link to="/shop/orders" onClick={closeMobileMenu} className={cn(
                                        "block py-4 px-6 transition-colors",
                                        isDarkHeader ? "text-white hover:bg-gray-800" : "text-gray-900 hover:bg-gray-50"
                                    )}>
                                        My Orders
                                    </Link>
                                </div>
                            </div>

                            <div className={cn(
                                "absolute bottom-0 left-0 right-0 p-6 border-t",
                                isDarkHeader ? "bg-gray-900 border-gray-700" : "bg-gray-50 border-gray-100"
                            )}>
                                <p className={cn(
                                    "text-sm text-center",
                                    isDarkHeader ? "text-gray-400" : "text-gray-600"
                                )}>
                                    © {new Date().getFullYear()} Markefy
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;