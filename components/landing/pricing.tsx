import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function Pricing() {
    return (
        <section id="pricing" className="py-20 px-4" >
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">Harga simpel dan transparan</h2>
                    <p className="text-muted-foreground">
                        Pilih paket yang sesuai untuk skala bisnis Anda. Tingkatkan kapan saja seiring pertumbuhan Anda.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Free Tier */}
                    <Card className="flex flex-col border-border/60 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-xl">Gratis</CardTitle>
                            <CardDescription>Untuk individu dan freelancer</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">Gratis</div>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> 1 Proyek Aktif</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Estimasi Dasar</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Ekspor PDF Terbatas</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Dukungan Komunitas</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Mulai Sekarang</Button>
                        </CardFooter>
                    </Card>

                    {/* Pro Tier */}
                    <Card className="flex flex-col border-primary shadow-lg relative bg-background overflow-visible">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                                Paling Populer
                            </Badge>
                        </div>
                        <CardHeader>
                            <CardTitle className="text-xl">Pro</CardTitle>
                            <CardDescription>Untuk kontraktor berkembang</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-1">Rp 199.000<span className="text-lg font-normal text-muted-foreground">/bulan</span></div>
                            <p className="text-xs text-muted-foreground mb-6">Ditagih tahunan</p>

                            <Separator className="mb-6" />

                            <ul className="space-y-3 text-sm">
                                <li className="flex items-center gap-2 font-medium"><span className="text-primary">✓</span> Proyek Aktif Tanpa Batas</li>
                                <li className="flex items-center gap-2 font-medium"><span className="text-primary">✓</span> Estimasi Lanjutan & Database</li>
                                <li className="flex items-center gap-2 font-medium"><span className="text-primary">✓</span> Kustom Branding Faktur</li>
                                <li className="flex items-center gap-2 font-medium"><span className="text-primary">✓</span> Manajemen Subkontraktor</li>
                                <li className="flex items-center gap-2 font-medium"><span className="text-primary">✓</span> Dukungan Prioritas via Email</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button className="w-full">Mulai Uji Coba Gratis</Button>
                        </CardFooter>
                    </Card>

                    {/* Enterprise Tier */}
                    <Card className="flex flex-col border-border/60 hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-xl">Enterprise</CardTitle>
                            <CardDescription>Untuk tim konstruksi besar</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <div className="text-4xl font-bold mb-6">Rp 699.000<span className="text-lg font-normal text-muted-foreground">/bulan</span></div>
                            <ul className="space-y-3 text-sm text-muted-foreground">
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Semua Fitur Pro</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Kolaborasi Multi-user</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Integrasi API</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Pelatihan & Onboarding</li>
                                <li className="flex items-center gap-2"><span className="text-primary">✓</span> Manajer Akun Dedikasi</li>
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">Hubungi Penjualan</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section >
    );
}
