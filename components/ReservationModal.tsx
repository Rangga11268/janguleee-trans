"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Calendar, MapPin, Bus, User, Send } from "lucide-react";

interface ReservationModalProps {
  isOpen: boolean;
  closeModal: () => void;
  defaultUnit?: string;
}

export default function ReservationModal({
  isOpen,
  closeModal,
  defaultUnit = "",
}: ReservationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    destination: "",
    unit: defaultUnit,
    passengers: "",
  });

  useEffect(() => {
    if (defaultUnit) {
      setFormData((prev) => ({ ...prev, unit: defaultUnit }));
    }
  }, [defaultUnit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format message for WhatsApp
    const message = `Halo Janguleee Trans, saya ingin melakukan reservasi dengan detail berikut:
    
Nama: ${formData.name}
Tanggal: ${formData.date}
Tujuan: ${formData.destination}
Unit: ${formData.unit}
Jumlah Penumpang: ${formData.passengers}

Mohon info ketersediaan dan harganya. Terima kasih.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628131573731?text=${encodedMessage}`, "_blank");
    closeModal();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-3xl bg-brand-slate border border-white/10 p-8 text-left align-middle shadow-[0_0_50px_rgba(212,175,55,0.15)] transition-all">
                <div className="flex justify-between items-center mb-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-white font-serif"
                  >
                    Quick{" "}
                    <span className="text-brand-primary">Reservation</span>
                  </Dialog.Title>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">
                      Nama Lengkap
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User size={18} className="text-brand-primary" />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        placeholder="Masukkan nama anda"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">
                        Tanggal
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar size={18} className="text-brand-primary" />
                        </div>
                        <input
                          type="date"
                          required
                          className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all [color-scheme:dark]"
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-400 font-medium ml-1">
                        Penumpang
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User size={18} className="text-brand-primary" />
                        </div>
                        <input
                          type="number"
                          required
                          placeholder="Jml Orang"
                          className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                          value={formData.passengers}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              passengers: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">
                      Tujuan
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin size={18} className="text-brand-primary" />
                      </div>
                      <input
                        type="text"
                        required
                        className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"
                        placeholder="Kota tujuan wisata"
                        value={formData.destination}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            destination: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 font-medium ml-1">
                      Pilih Unit
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Bus size={18} className="text-brand-primary" />
                      </div>
                      <select
                        className="w-full bg-black/30 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all appearance-none"
                        value={formData.unit}
                        onChange={(e) =>
                          setFormData({ ...formData, unit: e.target.value })
                        }
                      >
                        <option
                          value=""
                          className="bg-brand-slate text-gray-400"
                        >
                          Pilih tipe armada...
                        </option>
                        <option value="Premium R25" className="bg-brand-slate">
                          Premium R25 (VIP)
                        </option>
                        <option
                          value="Big Bus Executive"
                          className="bg-brand-slate"
                        >
                          Big Bus Executive (32 Seat)
                        </option>
                        <option
                          value="Big Bus Standard"
                          className="bg-brand-slate"
                        >
                          Big Bus Standard (50 Seat)
                        </option>
                        <option value="Medium Bus" className="bg-brand-slate">
                          Medium Bus
                        </option>
                        <option value="HiAce / Elf" className="bg-brand-slate">
                          HiAce / Elf
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full flex justify-center items-center gap-2 bg-brand-primary hover:bg-brand-accent text-black font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-brand-primary/20"
                    >
                      <Send size={20} />
                      Kirim Pesan (WhatsApp)
                    </button>
                    <p className="text-xs text-center text-gray-500 mt-4">
                      Anda akan diarahkan ke WhatsApp untuk mengirim detail
                      reservasi ke admin kami.
                    </p>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
