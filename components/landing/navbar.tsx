import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LogoIcon } from "@/components/logo";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
    return (
        <header className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <div className="bg-primary/10 p-1.5 rounded-lg">
                        <LogoIcon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Planin</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#features" className={navigationMenuTriggerStyle()}>
                                    Fitur
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#pricing" className={navigationMenuTriggerStyle()}>
                                    Harga
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="#testimonials" className={navigationMenuTriggerStyle()}>
                                    Testimoni
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login">
                        <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                            Log in
                        </Button>
                    </Link>
                    <Button className="rounded-full px-6">Mulai Sekarang</Button>
                </div>

                {/* Mobile Navigation */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="shrink-0">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle className="text-left flex items-center gap-2">
                                    <LogoIcon className="h-5 w-5 text-primary" />
                                    Planin
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-8">
                                <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                                    Features
                                </Link>
                                <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                                    Pricing
                                </Link>
                                <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
                                    Testimonials
                                </Link>
                                <div className="h-px bg-border my-2" />
                                <Link href="/login" className="text-sm font-medium hover:text-primary transition-colors">
                                    Masuk
                                </Link>
                                <Button className="w-full">Mulai Sekarang</Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
