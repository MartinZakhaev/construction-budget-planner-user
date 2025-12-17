import { BarChart3, Calculator, Calendar, FileText, Layers, Smartphone } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const features = [
    {
        title: "Estimasi Cerdas",
        description: "Buat estimasi akurat dalam hitungan menit dengan database cerdas kami untuk biaya material dan tenaga kerja."
    },
    {
        title: "Pelacakan Real-time",
        description: "Pantau anggaran Anda secara real-time. Pembaruan instan saat Anda memasukkan pengeluaran dan jam kerja."
    },
    {
        title: "Laporan Instan",
        description: "Buat laporan PDF profesional dan faktur untuk klien Anda hanya dengan satu klik."
    },
    {
        title: "Manajemen Proyek",
        description: "Atur tugas spesifik, tetapkan pencapaian, dan jaga tim Anda tetap selaras dengan tujuan proyek."
    },
    {
        title: "Tampilan Linimasa",
        description: "Visualisasikan jadwal proyek dan laju penggunaan anggaran Anda pada bagan Gantt interaktif."
    },
    {
        title: "Akses Seluler",
        description: "Akses anggaran Anda di mana saja, kapan saja. Desain responsif sepenuhnya untuk manajemen di lapangan."
    }
];

export function Features() {
    return (
        <section id="features" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Semua yang Anda butuhkan untuk membangun lebih baik</h2>
                    <p className="text-muted-foreground">
                        Sederhanakan proyek konstruksi Anda dengan alat canggih yang dirancang untuk kontraktor dan manajer proyek.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
                            <CardHeader>
                                <CardTitle className="text-xl mb-2 flex items-center gap-2">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                        {/* Icons would ideally be specific to each feature, using generic layout icon for now */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
                                    </div>
                                    {feature.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
