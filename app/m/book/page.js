"use client"

import {useState} from 'react';
import {
    Droplets,
    Zap,
    Star,
    Crown,
    Check,
    Car,
    Calendar,
    MapPin,
    Clock,
    ShieldCheck,
    Award,
    Download,
    Share2,
    Loader2,
} from 'lucide-react';

export default function Book() {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedService, setSelectedService] = useState('deluxe');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [vehicleInfo, setVehicleInfo] = useState({
        plate: '',
        type: 'Sedan',
        color: 'white',
        instructions: ''
    });

    const totalSteps = 4;

    const services = {
        express: {
            name: 'Express Wash',
            price: 150,
            duration: '15 min',
            icon: Zap,
            color: 'slate',
            features: ['Exterior Hand Wash', 'Tire Cleaning', 'Window Cleaning']
        },
        deluxe: {
            name: 'Deluxe Detail',
            price: 350,
            duration: '45 min',
            icon: Star,
            color: 'slate',
            features: ['Everything in Express', 'Interior Vacuum', 'Dashboard Polish', 'Wax Protection'],
            popular: true
        },
        premium: {
            name: 'Premium Ceramic',
            price: 950,
            duration: '2 hrs',
            icon: Crown,
            color: 'slate',
            features: ['Clay Bar Treatment', 'Ceramic Coating', 'Leather Conditioning', 'Engine Bay Detail']
        }
    };

    // Generate next 7 days
    const getDates = () => {
        const dates = [];
        const today = new Date();
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let i = 0; i < 7; i++) {
            const date = new Date(today);
            date.setDate(today.getDate() + i);
            dates.push({
                day: days[date.getDay()],
                date: date.getDate(),
                fullDate: date,
                isToday: i === 0
            });
        }
        return dates;
    };

    const dates = getDates();

    const timeSlots = [
        '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM'
    ];

    const handleServiceSelect = (service) => {
        setSelectedService(service);
    };

    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
    };

    const nextStep = () => {
        if (currentStep === 4) {
            setIsProcessing(true);
            setTimeout(() => {
                setIsProcessing(false);
                setCurrentStep(5);
            }, 1500);
        } else {
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => prev - 1);
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-ZA', {
            style: 'currency',
            currency: 'ZAR',
            minimumFractionDigits: 0
        }).format(amount);
    };

    const getServiceStyles = (color) => {
        const styles = {
            slate: {
                bg: 'bg-slate-100',
                icon: 'text-slate-700',
                border: 'border-slate-200',
                accent: 'bg-slate-600'
            },
            teal: {
                bg: 'bg-teal-100',
                icon: 'text-teal-700',
                border: 'border-teal-200',
                accent: 'bg-teal-600'
            },
            indigo: {
                bg: 'bg-indigo-100',
                icon: 'text-indigo-700',
                border: 'border-indigo-200',
                accent: 'bg-indigo-600'
            }
        };
        return styles[color] || styles.slate;
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        {/*<div className="w-10 h-10 rounded-lg bg-teal-700 flex items-center justify-center">*/}
                        {/*    <Droplets className="w-6 h-6 text-white"/>*/}
                        {/*</div>*/}
                        <span className="text-xl font-black tracking-tight">
                            SOAKSY
                        </span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        {/*<a href="#" className="hover:text-slate-900 transition-colors">Services</a>*/}
                        {/*<a href="#" className="hover:text-slate-900 transition-colors">Pricing</a>*/}
                        {/*<a href="#" className="hover:text-slate-900 transition-colors">Locations</a>*/}
                        <button
                            className="px-4 py-2 rounded-lg border border-slate-300 hover:border-slate-900 hover:text-slate-900 transition-all">
                            Sign In
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
                {/* Header */}
                {/*<div className="text-center mb-10">*/}
                {/*    <h1 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900">*/}
                {/*        Book Your Premium Wash*/}
                {/*    </h1>*/}
                {/*    <p className="text-slate-600 max-w-xl mx-auto">*/}
                {/*        Professional car care in Cape Town. Select your service and schedule.*/}
                {/*    </p>*/}
                {/*</div>*/}

                {/* Progress Steps */}
                <div className="max-w-2xl mx-auto mb-10">
                    <div className="flex justify-between items-center relative">
                        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10"/>
                        <div
                            className="absolute top-1/2 left-0 h-0.5 bg-teal-700 -z-10 transition-all duration-500"
                            style={{width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`}}
                        />
                        {[1, 2, 3, 4].map((step) => (
                            <div key={step} className="flex flex-col items-center gap-2 bg-slate-50 px-2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all border ${
                                        step < currentStep
                                            ? 'bg-teal-700 text-white border-teal-700'
                                            : step === currentStep
                                                ? 'bg-white text-teal-700 border-teal-700'
                                                : 'bg-white text-slate-400 border-slate-300'
                                    }`}>
                                    {step < currentStep ? <Check className="w-4 h-4"/> : step}
                                </div>
                                <span className={`text-xs font-medium ${
                                    step <= currentStep ? 'text-slate-900' : 'text-slate-400'
                                }`}>
                                    {step === 1 ? 'Service' : step === 2 ? 'Vehicle' : step === 3 ? 'Schedule' : 'Confirm'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Booking Grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Left Panel */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* Step 1: Service Selection */}
                        {currentStep === 1 && (
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900">
                                    Select Service
                                </h2>

                                <div className="space-y-4">
                                    {Object.entries(services).map(([key, service]) => {
                                        const Icon = service.icon;
                                        const isSelected = selectedService === key;
                                        const styles = getServiceStyles(service.color);

                                        return (
                                            <div
                                                key={key}
                                                onClick={() => handleServiceSelect(key)}
                                                className={`relative border-2 rounded-xl p-5 cursor-pointer transition-all ${
                                                    isSelected
                                                        ? 'border-teal-700 bg-teal-50/50 shadow-md'
                                                        : 'border-slate-200 hover:border-slate-300 bg-white'
                                                }`}
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div
                                                        className={`w-12 h-12 rounded-lg ${styles.bg} flex items-center justify-center flex-shrink-0`}>
                                                        <Icon className={`w-6 h-6 ${styles.icon}`}/>
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="flex justify-between items-start mb-1">
                                                            <div className="flex items-center gap-2">
                                                                <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                                                                {service.popular && (
                                                                    <span
                                                                        className="px-2 py-0.5 rounded text-xs font-bold bg-teal-100 text-teal-800">
                                                                        POPULAR
                                                                    </span>
                                                                )}
                                                            </div>
                                                            <span className="text-xl font-bold text-teal-700">
                                                                {formatCurrency(service.price)}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-slate-600 mb-3">
                                                            {key === 'express' ? 'Quick exterior clean perfect for busy schedules' :
                                                                key === 'deluxe' ? 'Complete interior and exterior rejuvenation' :
                                                                    'Ultimate protection with ceramic coating technology'}
                                                        </p>
                                                        <div className="flex flex-wrap gap-2">
                                                            {service.features.map((feature, idx) => (
                                                                <span key={idx}
                                                                      className="px-2 py-1 rounded-md bg-slate-100 text-xs font-medium text-slate-700">
                                                                    {feature}
                                                                </span>
                                                            ))}
                                                        </div>
                                                        <div
                                                            className="mt-3 pt-3 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500">
                                                            <Clock className="w-3 h-3"/>
                                                            <span>{service.duration}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Step 2: Vehicle Info */}
                        {currentStep === 2 && (
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900">
                                    Vehicle Details
                                </h2>

                                <div className="space-y-5">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-slate-700">License
                                                Plate</label>
                                            <input
                                                type="text"
                                                placeholder="CA 123-456"
                                                value={vehicleInfo.plate}
                                                onChange={(e) => setVehicleInfo({
                                                    ...vehicleInfo,
                                                    plate: e.target.value
                                                })}
                                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all text-slate-900 placeholder-slate-400"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold mb-2 text-slate-700">Vehicle
                                                Type</label>
                                            <select
                                                value={vehicleInfo.type}
                                                onChange={(e) => setVehicleInfo({...vehicleInfo, type: e.target.value})}
                                                className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all text-slate-900"
                                            >
                                                <option>Sedan</option>
                                                <option>SUV</option>
                                                <option>Truck</option>
                                                <option>Luxury/Exotic</option>
                                                <option>Motorcycle</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-3 text-slate-700">Vehicle
                                            Color</label>
                                        <div className="flex gap-3 flex-wrap">
                                            {['white', 'black', 'red', 'blue', 'gray', 'silver'].map((color) => (
                                                <button
                                                    key={color}
                                                    onClick={() => setVehicleInfo({...vehicleInfo, color})}
                                                    className={`w-10 h-10 rounded-lg border-2 transition-all ${
                                                        vehicleInfo.color === color
                                                            ? 'border-teal-700 ring-2 ring-teal-700 ring-offset-2'
                                                            : 'border-slate-300 hover:border-slate-400'
                                                    } ${
                                                        color === 'white' ? 'bg-white' :
                                                            color === 'black' ? 'bg-slate-900' :
                                                                color === 'red' ? 'bg-red-600' :
                                                                    color === 'blue' ? 'bg-blue-600' :
                                                                        color === 'gray' ? 'bg-slate-500' :
                                                                            'bg-slate-300'
                                                    }`}
                                                    title={color.charAt(0).toUpperCase() + color.slice(1)}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold mb-2 text-slate-700">Special
                                            Instructions</label>
                                        <textarea
                                            rows={3}
                                            placeholder="Any specific areas of concern or special requests..."
                                            value={vehicleInfo.instructions}
                                            onChange={(e) => setVehicleInfo({
                                                ...vehicleInfo,
                                                instructions: e.target.value
                                            })}
                                            className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-all text-slate-900 placeholder-slate-400 resize-none"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 3: Schedule */}
                        {currentStep === 3 && (
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900">
                                    Select Date & Time
                                </h2>

                                <div className="mb-6">
                                    <label className="block text-sm font-semibold mb-3 text-slate-700">Select
                                        Date</label>
                                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                                        {dates.map((date, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => handleDateSelect(date.fullDate)}
                                                className={`flex-shrink-0 w-14 h-16 rounded-lg border-2 flex flex-col items-center justify-center gap-0.5 transition-all ${
                                                    selectedDate?.getDate() === date.date
                                                        ? 'bg-teal-700 border-teal-700 text-white'
                                                        : 'bg-white border-slate-300 hover:border-slate-400 text-slate-900'
                                                }`}
                                            >
                                                <span
                                                    className={`text-xs ${selectedDate?.getDate() === date.date ? 'text-teal-100' : 'text-slate-500'}`}>
                                                    {date.day}
                                                </span>
                                                <span className="text-lg font-bold">{date.date}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {selectedDate && (
                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold mb-3 text-slate-700">Available
                                            Times</label>
                                        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
                                            {timeSlots.map((time, idx) => {
                                                const isDisabled = Math.random() > 0.8;
                                                return (
                                                    <button
                                                        key={idx}
                                                        disabled={isDisabled}
                                                        onClick={() => !isDisabled && handleTimeSelect(time)}
                                                        className={`py-2.5 px-3 rounded-lg text-sm font-medium border transition-all ${
                                                            isDisabled
                                                                ? 'opacity-40 cursor-not-allowed border-slate-200 bg-slate-50 text-slate-400'
                                                                : selectedTime === time
                                                                    ? 'bg-teal-700 text-white border-teal-700'
                                                                    : 'border-slate-300 bg-white text-slate-700 hover:border-teal-700 hover:text-teal-700'
                                                        }`}
                                                    >
                                                        {time}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}

                                <div className="pt-6 border-t border-slate-200">
                                    <label className="block text-sm font-semibold mb-3 text-slate-700">Select
                                        Location</label>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        <div
                                            className="rounded-lg p-4 border-2 border-teal-700 bg-teal-50 cursor-pointer">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-teal-700 mt-0.5"/>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">Waterfront
                                                        Flagship</h4>
                                                    <p className="text-xs text-slate-600 mt-0.5">V&A Waterfront, Cape
                                                        Town</p>
                                                    <span
                                                        className="text-xs text-teal-700 font-medium mt-1 inline-block">Open Now</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="rounded-lg p-4 border-2 border-slate-200 cursor-pointer hover:border-slate-300 transition-colors">
                                            <div className="flex items-start gap-3">
                                                <MapPin className="w-5 h-5 text-slate-500 mt-0.5"/>
                                                <div>
                                                    <h4 className="font-bold text-slate-900 text-sm">Claremont
                                                        Branch</h4>
                                                    <p className="text-xs text-slate-600 mt-0.5">Main Road,
                                                        Claremont</p>
                                                    <span className="text-xs text-slate-500 mt-1 inline-block">3.2 km away</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Step 4: Review */}
                        {currentStep === 4 && (
                            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-2xl font-bold mb-6 text-slate-900">Review Booking</h2>

                                <div className="space-y-3 mb-6">
                                    <div
                                        className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                                <Star className="w-5 h-5 text-teal-700"/>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{services[selectedService].name}</p>
                                                <p className="text-sm text-slate-600">{services[selectedService].duration}</p>
                                            </div>
                                        </div>
                                        <span
                                            className="font-bold text-slate-900">{formatCurrency(services[selectedService].price)}</span>
                                    </div>

                                    <div
                                        className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                                                <Car className="w-5 h-5 text-slate-700"/>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">{vehicleInfo.type}</p>
                                                <p className="text-sm text-slate-600">{vehicleInfo.plate || 'No plate entered'}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                                        <div className="flex items-center gap-3">
                                            <div
                                                className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center">
                                                <Calendar className="w-5 h-5 text-slate-700"/>
                                            </div>
                                            <div>
                                                <p className="font-bold text-slate-900">
                                                    {selectedDate?.toLocaleDateString('en-ZA', {
                                                        month: 'long',
                                                        day: 'numeric'
                                                    })}
                                                </p>
                                                <p className="text-sm text-slate-600">{selectedTime}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                    <p className="text-sm text-amber-800">
                                        Please arrive 5 minutes before your scheduled time. Cancellations must be made
                                        at least 2 hours in advance.
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Confirmation Screen */}
                        {currentStep === 5 && (
                            <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center shadow-sm">
                                <div
                                    className="w-16 h-16 rounded-full bg-teal-700 flex items-center justify-center mx-auto mb-4">
                                    <Check className="w-8 h-8 text-white"/>
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-slate-900">Booking Confirmed</h2>
                                <p className="text-slate-600 mb-6">
                                    {selectedDate?.toLocaleDateString('en-ZA', {
                                        month: 'long',
                                        day: 'numeric'
                                    })} at {selectedTime}
                                </p>

                                <div
                                    className="bg-slate-50 rounded-xl p-5 mb-6 border border-slate-200 text-left space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Service</span>
                                        <span
                                            className="font-semibold text-slate-900">{services[selectedService].name}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Vehicle</span>
                                        <span
                                            className="font-semibold text-slate-900">{vehicleInfo.type} ({vehicleInfo.plate || 'N/A'})</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-slate-600">Location</span>
                                        <span className="font-semibold text-slate-900">Waterfront Flagship</span>
                                    </div>
                                    <div className="pt-3 border-t border-slate-200 flex justify-between items-center">
                                        <span className="font-bold text-slate-900">Total Paid</span>
                                        <span className="text-xl font-bold text-teal-700">
                                            {formatCurrency(services[selectedService].price * 1.15)}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <button
                                        className="flex-1 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 font-semibold text-slate-700 text-sm">
                                        <Download className="w-4 h-4"/>
                                        Save Calendar
                                    </button>
                                    <button
                                        className="flex-1 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 transition-colors flex items-center justify-center gap-2 font-semibold text-white text-sm">
                                        <Share2 className="w-4 h-4"/>
                                        Share Details
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Navigation Buttons */}
                        {currentStep < 5 && (
                            <div className="flex justify-between pt-2">
                                <button
                                    onClick={prevStep}
                                    disabled={currentStep === 1}
                                    className="px-6 py-2.5 rounded-lg border border-slate-300 hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-slate-700 text-sm"
                                >
                                    Back
                                </button>
                                <button
                                    onClick={nextStep}
                                    disabled={isProcessing || (currentStep === 3 && (!selectedDate || !selectedTime))}
                                    className="px-6 py-2.5 rounded-lg bg-teal-700 hover:bg-teal-800 text-white font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center gap-2"
                                >
                                    {isProcessing ? (
                                        <>
                                            <Loader2 className="w-4 h-4 animate-spin"/>
                                            Processing...
                                        </>
                                    ) : currentStep === 4 ? (
                                        'Confirm Booking'
                                    ) : (
                                        'Continue'
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Right Panel: Summary */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                            <h3 className="text-base font-bold mb-4 flex items-center gap-2 text-slate-900">
                                Order Summary
                            </h3>

                            <div className="space-y-3 mb-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Service</span>
                                    <span
                                        className="font-semibold text-slate-900">{services[selectedService].name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Duration</span>
                                    <span
                                        className="font-semibold text-slate-900">{services[selectedService].duration}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Date</span>
                                    <span className="font-semibold text-slate-900">
                                        {selectedDate ? selectedDate.toLocaleDateString('en-ZA', {
                                            month: 'short',
                                            day: 'numeric'
                                        }) : '-'}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-600">Time</span>
                                    <span className="font-semibold text-slate-900">{selectedTime || '-'}</span>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-200 space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">Subtotal</span>
                                    <span
                                        className="font-semibold text-slate-900">{formatCurrency(services[selectedService].price)}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-600">VAT (15%)</span>
                                    <span
                                        className="font-semibold text-slate-900">{formatCurrency(services[selectedService].price * 0.15)}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-slate-200">
                                    <span className="font-bold text-slate-900">Total</span>
                                    <span className="text-lg font-bold text-teal-700">
                                        {formatCurrency(services[selectedService].price * 1.15)}
                                    </span>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="mt-6 pt-4 border-t border-slate-200 grid grid-cols-3 gap-2 text-center">
                                <div className="flex flex-col items-center gap-1">
                                    <ShieldCheck className="w-4 h-4 text-teal-700"/>
                                    <span className="text-xs text-slate-600 font-medium">Insured</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Clock className="w-4 h-4 text-teal-700"/>
                                    <span className="text-xs text-slate-600 font-medium">Punctual</span>
                                </div>
                                <div className="flex flex-col items-center gap-1">
                                    <Award className="w-4 h-4 text-teal-700"/>
                                    <span className="text-xs text-slate-600 font-medium">Quality</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
