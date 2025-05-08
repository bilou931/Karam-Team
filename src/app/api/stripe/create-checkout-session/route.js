// src/api/stripe/create-checkout-session/route.js
import { stripe } from "../../../utils/stripe"; // Assure-toi d'importer ta clé Stripe ici ou d'utiliser une fonction qui initialise Stripe

export async function POST(req) {
  try {
    const { amount, email } = await req.json();

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
      success_url: "https://google.com", // URL de succès
      cancel_url: "https://chatgpt.com", // URL d'annulation
      // success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`, // URL de succès
      // cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/cancel`, // URL d'annulation
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

