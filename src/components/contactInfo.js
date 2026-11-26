// Phone / WhatsApp number ek hi jagah rakha hai - yaha badlo to pure site me badal jayega

export const TOLL_FREE = '1800 889 0856'
export const TOLL_FREE_LINK = 'tel:18008890856'

export const WHATSAPP_NUMBER = '919419297657'

// Kisi bhi message ke saath WhatsApp link banane ke liye
export const whatsappLink = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
