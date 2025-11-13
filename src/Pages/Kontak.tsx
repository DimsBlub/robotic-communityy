import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Kontak() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda telah terkirim.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="relative h-64 bg-gradient-to-r from-red-600 to-gray-900 flex items-center justify-center">
                <div className="text-center animate-fadeIn">
                    <h1 className="text-5xl font-bold text-white">Kontak Kami</h1>
                    <p className="text-xl text-gray-200 mt-2">Hubungi kami untuk informasi lebih lanjut</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8 animate-slideLeft">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Informasi Kontak</h2>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                                        <p className="text-gray-600 dark:text-gray-400">robotech@sekolah.sch.id</p>
                                        <p className="text-gray-600 dark:text-gray-400">info.robotech@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Telepon</h3>
                                        <p className="text-gray-600 dark:text-gray-400">+62 812-3456-7890</p>
                                        <p className="text-gray-600 dark:text-gray-400">+62 821-9876-5432</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:shadow-lg">
                                    <div className="bg-red-600 p-3 rounded-lg">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white mb-1">Alamat</h3>
                                        <p className="text-gray-600 dark:text-gray-400">
                                            SMK Negeri 2 Cimahi<br />
                                            Jl. Teknologi No. 123<br />
                                            Surabaya, Jawa Timur 60111
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Jam Operasional</h3>
                            <div className="space-y-2 text-gray-600 dark:text-gray-400">
                                <div className="flex justify-between">
                                    <span>Senin - Jumat</span>
                                    <span className="font-semibold">13:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sabtu</span>
                                    <span className="font-semibold">09:00 - 15:00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Minggu</span>
                                    <span className="font-semibold text-red-600">Tutup</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="animate-slideRight">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Kirim Pesan</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                                        placeholder="Masukkan nama lengkap"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                                        placeholder="nama@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Subjek
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300"
                                        placeholder="Subjek pesan"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Pesan
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all duration-300 resize-none"
                                        placeholder="Tulis pesan Anda di sini..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                                >
                                    <span>Kirim Pesan</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="mt-16 animate-fadeIn">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Lokasi Kami</h2>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.4865705458746!2d112.73793931477498!3d-7.297210894722894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
