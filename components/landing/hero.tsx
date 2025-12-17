import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, CreditCard, Users, Clock, Truck, TrendingUp } from "lucide-react";

export function Hero() {
    return (
        <section className="pt-32 pb-16 md:pt-48 md:pb-32 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <div className="inline-flex items-center justify-center mb-8">
                    <Badge variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse" />
                        v1.0 kini tersedia
                    </Badge>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8">
                    Kelola Anggaran Konstruksi <br />
                    <span className="text-primary relative">
                        Anda dengan Presisi
                    </span>
                </h1>

                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                    Platform lengkap untuk merencanakan, melacak, dan mengelola biaya konstruksi.
                    Hindari pembengkakan biaya dan bangun dengan percaya diri.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full px-8 h-12 text-base w-full sm:w-auto">
                        Mulai Gratis <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base w-full sm:w-auto bg-background/50 backdrop-blur-sm hover:bg-background/80">
                        Lihat Demo
                    </Button>
                </div>

                <div className="mt-20 relative mx-auto max-w-5xl">
                    <div className="relative rounded-xl border border-border/50 bg-background/50 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent" />

                        {/* Mock UI Elements */}
                        <div className="absolute top-0 left-0 right-0 h-12 border-b border-border/50 bg-muted/20 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>
                        </div>

                        <div className="p-8 mt-12 grid grid-cols-12 gap-6 h-full">
                            <div className="col-span-3 border-r border-border/50 pr-6 space-y-4 hidden md:block">
                                <div className="h-8 bg-muted/40 rounded w-3/4" />
                                <div className="h-4 bg-muted/30 rounded w-1/2" />
                                <div className="space-y-2 mt-8">
                                    <div className="h-10 bg-primary/10 rounded w-full" />
                                    <div className="h-10 bg-muted/20 rounded w-full" />
                                    <div className="h-10 bg-muted/20 rounded w-full" />
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-9 space-y-6">
                                <div className="flex justify-between items-center">
                                    <div className="h-8 bg-muted/40 rounded w-1/3" />
                                    <div className="h-8 bg-primary/20 rounded w-24" />
                                </div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="h-32 bg-muted/20 rounded-lg border border-border/50 p-4 space-y-2">
                                        <div className="h-8 w-8 bg-green-500/20 rounded mb-2" />
                                        <div className="h-4 bg-muted/40 rounded w-2/3" />
                                        <div className="h-6 bg-muted/30 rounded w-full" />
                                    </div>
                                    <div className="h-32 bg-muted/20 rounded-lg border border-border/50 p-4 space-y-2">
                                        <div className="h-8 w-8 bg-blue-500/20 rounded mb-2" />
                                        <div className="h-4 bg-muted/40 rounded w-2/3" />
                                        <div className="h-6 bg-muted/30 rounded w-full" />
                                    </div>
                                    {/* <div className="h-32 bg-muted/20 rounded-lg border border-border/50 p-4 space-y-2">
                                        <div className="h-8 w-8 bg-purple-500/20 rounded mb-2" />
                                        <div className="h-4 bg-muted/40 rounded w-2/3" />
                                        <div className="h-6 bg-muted/30 rounded w-full" />
                                    </div> */}
                                </div>
                                <div className="h-full bg-muted/10 rounded-lg border border-border/50" />
                            </div>
                        </div>

                    </div>

                    {/* Floating Cards */}
                    <div className="absolute top-1/4 -right-12 w-64 bg-background border border-border shadow-xl rounded-xl p-4 hidden lg:block animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                <BarChart3 className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                                <p className="text-sm font-medium">Penghematan Biaya</p>
                                <p className="text-xs text-muted-foreground">+12% bulan ini</p>
                            </div>
                        </div>
                        <div className="h-12 flex items-end gap-1">
                            <div className="bg-green-500/20 w-1/5 h-[40%] rounded-t" />
                            <div className="bg-green-500/30 w-1/5 h-[60%] rounded-t" />
                            <div className="bg-green-500/40 w-1/5 h-[50%] rounded-t" />
                            <div className="bg-green-500/50 w-1/5 h-[70%] rounded-t" />
                            <div className="bg-green-500 w-1/5 h-[85%] rounded-t" />
                        </div>
                    </div>

                    {/* New Floating Card 1: Team - Top Left */}
                    <div className="absolute -top-8 -left-12 bg-background border border-border shadow-xl rounded-xl p-4 flex items-center gap-4 hidden lg:flex animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
                        <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                            <Users className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold">Tim Aktif</p>
                            <p className="text-sm text-muted-foreground">8 Anggota</p>
                        </div>
                    </div>

                    {/* New Floating Card 2: Deadline - Bottom Right */}
                    <div className="absolute -bottom-8 -right-8 bg-background border border-border shadow-xl rounded-xl p-4 flex items-center gap-4 hidden lg:flex animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
                        <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold">Deadline</p>
                            <p className="text-sm text-muted-foreground">2 Hari Lagi</p>
                        </div>
                    </div>

                    {/* New Floating Card 3: Material - Mid Left */}
                    <div className="absolute top-1/2 -left-16 bg-background border border-border shadow-xl rounded-xl p-3 flex items-center gap-3 hidden lg:flex animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
                        <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                            <Truck className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm">Material</p>
                            <Badge variant="secondary" className="text-[10px] h-5">Otw</Badge>
                        </div>
                    </div>

                    {/* New Floating Card 4: Progress - Mid Right */}
                    <div className="absolute bottom-1/3 -right-14 bg-background border border-border shadow-xl rounded-xl p-3 flex items-center gap-3 hidden lg:flex animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-600">
                        <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                            <TrendingUp className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-sm">Progress</p>
                            <p className="text-xs text-muted-foreground text-green-600">+5% Daily</p>
                        </div>
                    </div>

                    <div className="absolute -bottom-6 -left-8 bg-background border border-border shadow-xl rounded-xl p-4 flex items-center gap-4 hidden lg:flex animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-700">
                        <div className="bg-primary/10 p-2 rounded-lg text-primary">
                            <CreditCard className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="font-bold">Anggaran Disetujui</p>
                            <p className="text-sm text-muted-foreground">Siap untuk konstruksi</p>
                        </div>
                        <Badge className="ml-2 bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-500/20">
                            Berhasil
                        </Badge>
                    </div>

                </div>
            </div>

        </section >
    );
}
