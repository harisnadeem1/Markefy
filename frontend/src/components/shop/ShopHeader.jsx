import React from 'react';
import { Link } from 'react-router-dom';
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

// 🔹 Dummy snippet items (replace with your real data if you have @/data/products)
const snippetItems = [
    { title: 'Hero Sections', href: '/shop/collection/heros' },
    { title: 'Pricing Tables', href: '/shop/collection/pricing' },
    { title: 'Sliders', href: '/shop/collection/sliders' },
];

const aboutItems = [
    { title: 'About Us', href: '/about-us', description: 'Learn more about our mission and team.' },
    { title: 'What Are Code Snippets?', href: '/what-are-code-snippets', description: 'Discover how snippets can save you time.' },
];

const customSnippetItems = [
    { title: 'Custom Website Request', href: '/custom-request', description: 'Get a quote for a full website build.' },
    { title: 'Section Requests / Suggestions', href: '/section-request', description: 'Suggest a new snippet for our store.' },
    { title: 'Migration / Integration Help', href: '/migration-help', description: 'Need help integrating a snippet?' },
];

const ListItem = React.forwardRef(({ className, title, children, to, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    to={to}
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground uppercase font-mono',
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground normal-case">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';

const MobileMenuSection = ({ title, items, isOpen, onToggle, onItemClick }) => (
    <div className="border-b border-gray-100">
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between py-4 px-6 text-left font-mono uppercase text-gray-900 hover:bg-gray-50 transition-colors"
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
                                className="block py-2 px-4 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
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

    // 🔹 Replace with your cart hook later
    const itemCount = 0;

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    const closeMobileMenu = () => {
        setIsOpen(false);
        setOpenSection(null);
    };

    return (
        <>
            <header className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40 w-full font-mono">
                <div className="px-4 sm:px-6 lg:px-8 w-full">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-3 items-center h-16 w-full">
                        {/* LEFT Nav */}
                        <nav className="flex items-center space-x-1">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="uppercase font-mono">About</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {aboutItems.map((item) => (
                                                    <ListItem key={item.title} title={item.title} to={item.href}>
                                                        {item.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="uppercase font-mono">Code Snippets</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                {snippetItems.map((item) => (
                                                    <ListItem key={item.title} title={item.title} to={item.href}>
                                                        Browse our collection of {item.title.toLowerCase()}.
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>

                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="uppercase font-mono">Custom Snippets</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
                                                {customSnippetItems.map((item) => (
                                                    <ListItem key={item.title} title={item.title} to={item.href}>
                                                        {item.description}
                                                    </ListItem>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </nav>

                        {/* CENTER Logo */}
                        <div className="flex justify-center">
                            <Link to="/shop" className="flex items-center space-x-2">
                                <img
                                    src="/logo/Markefy-black.png"   // ⬅️ replace with your actual logo path
                                    alt="Markefy Shop Logo"
                                    className="h-6 w-auto"
                                    loading="eager"
                                    decoding="async"
                                />
                            </Link>
                        </div>


                        {/* RIGHT */}
                        <div className="flex justify-end items-center gap-4">
                            <Link to="/" className={cn(navigationMenuTriggerStyle(), "uppercase font-mono")}>
                                Services
                            </Link>
                            <Link to="/contact" className={cn(navigationMenuTriggerStyle(), "uppercase font-mono")}>
                                Contact
                            </Link>
                            <Link to="/faq" className={cn(navigationMenuTriggerStyle(), "uppercase font-mono")}>
                                FAQ
                            </Link>
                            <Link to="/shop/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <ShoppingCart className="h-6 w-6 text-gray-600" />
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
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                            {isOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
                        </button>

                        {/* CENTER: Logo */}
                        <Link to="/shop" className="flex items-center space-x-2">
                            <Code className="h-7 w-7 text-blue-600" />
                            <span className="text-lg font-bold gradient-text uppercase font-mono">CodeSnippets Pro</span>
                        </Link>

                        {/* RIGHT: Cart */}
                        <Link to="/shop/cart" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <ShoppingCart className="h-6 w-6 text-gray-600" />
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
            </header>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 md:hidden">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeMobileMenu}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between p-6 border-b border-gray-100">
                                <div className="flex items-center space-x-2">
                                    <Code className="h-6 w-6 text-blue-600" />
                                    <span className="text-lg font-bold uppercase font-mono">Menu</span>
                                </div>
                                <button onClick={closeMobileMenu} className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                                    <X className="h-5 w-5 text-gray-500" />
                                </button>
                            </div>

                            <div className="py-2">
                                <MobileMenuSection
                                    title="About"
                                    items={aboutItems}
                                    isOpen={openSection === 'about'}
                                    onToggle={() => toggleSection('about')}
                                    onItemClick={closeMobileMenu}
                                />
                                <MobileMenuSection
                                    title="Code Snippets"
                                    items={snippetItems}
                                    isOpen={openSection === 'snippets'}
                                    onToggle={() => toggleSection('snippets')}
                                    onItemClick={closeMobileMenu}
                                />
                                <MobileMenuSection
                                    title="Custom Snippets"
                                    items={customSnippetItems}
                                    isOpen={openSection === 'custom'}
                                    onToggle={() => toggleSection('custom')}
                                    onItemClick={closeMobileMenu}
                                />

                                <div className="border-t border-gray-100 mt-4">
                                    <Link to="/contact" onClick={closeMobileMenu} className="block py-4 px-6 uppercase text-gray-900 hover:bg-gray-50 transition-colors">
                                        Contact
                                    </Link>
                                    <Link to="/faq" onClick={closeMobileMenu} className="block py-4 px-6 uppercase text-gray-900 hover:bg-gray-50 transition-colors">
                                        FAQ
                                    </Link>
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">
                                <p className="text-sm text-gray-600 text-center font-mono">
                                    © {new Date().getFullYear()} CodeSnippets Pro
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
