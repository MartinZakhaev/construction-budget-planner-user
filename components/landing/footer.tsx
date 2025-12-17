import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { LogoIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t border-border">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="bg-primary/10 p-1.5 rounded-lg">
                                <LogoIcon className="h-6 w-6 text-primary" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">Planin</span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-6">
                            Membangun masa depan manajemen konstruksi. Lacak biaya, kelola tim, dan selesaikan proyek sesuai anggaran.
                        </p>
                        <div className="flex gap-2">
                            <Link href="#">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Twitter className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="#">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Github className="h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="#">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <Linkedin className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Produk</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Fitur</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Harga</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrasi</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Enterprise</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Perusahaan</h4>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Karir</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Kontak</Link></li>
                        </ul>
                    </div>
                </div>

                <Separator className="mb-8" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Planin Inc. Hak cipta dilindungi.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Syarat Layanan</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
