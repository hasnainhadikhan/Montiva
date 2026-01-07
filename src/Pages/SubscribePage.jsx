import React, { useState } from 'react';
import { Check, X, Shield, Truck, Clock, Gift, CreditCard, Calendar, Users } from 'lucide-react';
import Newletter from '../components/Newletter.jsx';


const SubscribePage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const plans = [
    { 
      name: 'Basic', 
      monthlyPrice: 29,
      yearlyPrice: 290,
      bottles: 2, 
      features: ['Free Shipping', 'Monthly Delivery', 'Cancel Anytime', 'Order Tracking'],
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Pro', 
      monthlyPrice: 49,
      yearlyPrice: 470,
      bottles: 4, 
      features: ['Free Shipping', 'Bi-weekly Delivery', 'Priority Support', '10% Discount', 'Flexible Scheduling', 'Order Tracking'],
      popular: true,
      color: 'from-cyan-500 to-blue-600'
    },
    { 
      name: 'Premium', 
      monthlyPrice: 89,
      yearlyPrice: 850,
      bottles: 8, 
      features: ['Free Shipping', 'Weekly Delivery', 'VIP Support', '20% Discount', 'Exclusive Products', 'Birthday Gift', 'Order Tracking', 'Referral Rewards'],
      color: 'from-purple-500 to-blue-600'
    },
  ];

  const benefits = [
    { icon: Shield, title: 'No Commitments', desc: 'Cancel or pause anytime' },
    { icon: Truck, title: 'Free Delivery', desc: 'On all subscription orders' },
    { icon: Clock, title: 'Flexible Schedule', desc: 'Change delivery frequency' },
    { icon: Gift, title: 'Exclusive Perks', desc: 'Member-only discounts' },
  ];

  const faqs = [
    { q: 'Can I cancel my subscription?', a: 'Yes! You can cancel or pause your subscription at any time with no fees.' },
    { q: 'How does delivery work?', a: 'We deliver based on your plan frequency. You can change delivery dates in your account.' },
    { q: 'What if I go on vacation?', a: 'Simply pause your subscription or skip a delivery - it\'s completely flexible!' },
    { q: 'Are there any hidden fees?', a: 'No hidden fees! The price you see is what you pay, including free shipping.' },
  ];

  const testimonials = [
    { name: 'Sarah M.', text: 'Best decision ever! Never have to worry about running out.', rating: 5 },
    { name: 'John D.', text: 'The Pro plan is perfect for my family. Great value!', rating: 5 },
    { name: 'Emma L.', text: 'Love the flexibility and the quality is outstanding.', rating: 5 },
  ];

  const getPrice = (plan) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.yearlyPrice / 12);
  };

  const getSavings = (plan) => {
    if (billingCycle === 'yearly') {
      const yearlySavings = (plan.monthlyPrice * 12) - plan.yearlyPrice;
      return Math.round(yearlySavings);
    }
    return 0;
  };

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setShowPaymentModal(true);
  };

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            Subscribe & Save
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Up to 20% Off
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Never run out of hydration with our flexible subscription plans. Cancel or modify anytime.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg inline-flex gap-2">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-8 py-3 rounded-full font-semibold transition-all relative ${
                billingCycle === 'yearly'
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                plan.popular ? 'ring-4 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 text-sm font-bold">
                  Most Popular
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} text-white p-8`}>
                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">${getPrice(plan)}</span>
                  <span className="text-lg opacity-90">/month</span>
                </div>
                {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                  <p className="text-sm mt-2 bg-white/20 inline-block px-3 py-1 rounded-full">
                    Save ${getSavings(plan)}/year
                  </p>
                )}
                <p className="mt-4 text-lg">{plan.bottles} bottles per delivery</p>
              </div>

              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan)}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-4 rounded-xl font-bold hover:shadow-2xl transition-all transform hover:scale-105`}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Why Subscribe?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition">
                <benefit.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-bold text-lg mb-2 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mb-20 bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
            <h2 className="text-4xl font-bold text-center">Compare Plans</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-left text-slate-900">Feature</th>
                  {plans.map((plan, idx) => (
                    <th key={idx} className="p-4 text-center text-slate-900">{plan.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {['Free Shipping', 'Cancel Anytime', 'Order Tracking', 'Priority Support', 'Exclusive Products', 'Birthday Gift'].map((feature, idx) => (
                  <tr key={idx} className="border-t hover:bg-slate-50">
                    <td className="p-4 text-slate-700">{feature}</td>
                    {plans.map((plan, pIdx) => (
                      <td key={pIdx} className="p-4 text-center">
                        {plan.features.includes(feature) ? (
                          <Check className="w-6 h-6 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-6 h-6 text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            What Our Subscribers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">"{test.text}"</p>
                <p className="font-bold text-slate-900">- {test.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
                <summary className="p-6 cursor-pointer font-semibold text-lg text-slate-900 hover:bg-slate-50 transition">
                  {faq.q}
                </summary>
                <div className="px-6 pb-6 text-slate-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Payment Modal */}
        {showPaymentModal && selectedPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
            <div className="bg-white rounded-3xl max-w-md w-full p-8 relative animate-scale-in">
              <button
                onClick={() => setShowPaymentModal(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-2 text-slate-900">Complete Your Subscription</h3>
              <p className="text-slate-600 mb-6">
                {selectedPlan.name} Plan - ${getPrice(selectedPlan)}/month
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    <CreditCard className="w-4 h-4 inline mr-2" />
                    Card Number
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Expiry
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-slate-700">CVV</label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full border border-slate-300 rounded-lg px-4 py-3"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-slate-700">
                    <Users className="w-4 h-4 inline mr-2" />
                    Name on Card
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full border border-slate-300 rounded-lg px-4 py-3"
                  />
                </div>

                <button
                  onClick={() => {
                    setShowPaymentModal(false);
                    alert(`Successfully subscribed to ${selectedPlan.name} plan!`);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition"
                >
                  Complete Subscription
                </button>

                <p className="text-xs text-slate-500 text-center">
                  🔒 Secure payment processed by Stripe
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>

    </div>
        <Newletter/>
    </>
  );
};

export default SubscribePage;