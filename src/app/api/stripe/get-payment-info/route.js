// src/api/stripe/get-payment-info/route.js
import { stripe } from "../../../utils/stripe"; // Utilisation de ta clé secrète Stripe côté serveur

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const session_id = searchParams.get("session_id");
    console.log(req.url)
    console.log(session_id)
    if (!session_id) {
      return new Response(
        JSON.stringify({ success: false, message: "Session ID is missing" }),
        { status: 400 }
      );
    }

    // Récupérer la session de paiement Stripe
    const session = await stripe.checkout.sessions.retrieve(session_id);
    // const invoice = await stripe.invoices.retrieve(session.invoice);

    // Récupérer les informations liées à la session (montant, email, méthode de paiement, etc.)
    const paymentInfo = {
      amount: session.amount_total / 100, // Montant en euros
      email: session.customer_details.email,
      name:session.customer_details.name,
      paymentMethod: session.payment_method_types[0], // Méthode de paiement (carte)
      product:"Don a Karam Team"
    };

    return new Response(JSON.stringify({ success: true, paymentInfo }), { status: 200 });
  } catch (error) {
    console.error("Erreur lors de la récupération des informations de paiement:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Erreur lors de la récupération de la session" }),
      { status: 500 }
    );
  }
}
