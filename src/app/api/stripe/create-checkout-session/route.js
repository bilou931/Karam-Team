// src/api/stripe/create-checkout-session/route.js

import { stripe } from "../../../utils/stripe";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    // Créer la session de paiement
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "Don à Karam Team",
            },
            unit_amount: amount * 100, // Montant en cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`, // Inclure l'ID de session dans l'URL
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/collectes/maraudes`, // URL d'annulation
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la création de la session de paiement Stripe:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Erreur de création de la session" }),
      { status: 500 }
    );
  }
}