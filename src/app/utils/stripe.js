// utils/stripe.js
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // Utilise ta clé secrète Stripe

export { stripe };
