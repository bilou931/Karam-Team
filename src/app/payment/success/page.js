// pages/payment/success.js
"use client"
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import './page.css'


export default function Success() {
  const router = useRouter()
  const param = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPaymentInfo = async () => {
      
      const session_id = param.get("session_id"); // Récupère l'ID de session depuis l'URL

      if (!session_id) {
        console.error("Session ID is missing in the URL.");
        setLoading(false);
        return;
      }

      try {
        // Faire une requête GET pour récupérer les informations de paiement depuis l'API
        const response = await fetch(`/api/stripe/get-payment-info?session_id=${session_id}`);
        const result = await response.json();
        console.log(result)
        if (result.success) {
          // Stocker les informations dans l'état
          setPaymentInfo(result.paymentInfo);
        } else {
          console.error("Erreur lors de la récupération des informations de paiement.");
        }

        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de l'appel à l'API pour récupérer les infos de paiement :", error);
        setLoading(false);
      }
    };

    fetchPaymentInfo();
  }, [param]);

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="payment-success">
      <div className="success-container">
        <h1>Merci pour votre généreux don !</h1>
        {paymentInfo ? (
          <>
            <div className="payment-details">
              <p>
                Votre don de <strong>{paymentInfo.amount}€</strong> a bien été envoyé.
              </p>
              <p>Nous vous remercions chaleureusement pour votre soutien !</p>

              <h2>Informations de paiement</h2>
              <ul>
                <li><strong>Email :</strong> {paymentInfo.email}</li>
                <li><strong>Nom :</strong> {paymentInfo.name}</li>
                <li><strong>Méthode de paiement :</strong> {paymentInfo.paymentMethod}</li>
                <li><strong>Produit :</strong> {paymentInfo.product}</li>
              </ul>
            </div>

            <button className="back-button" onClick={() => router.push("/collectes/maraudes")}>
              Retourner à la page des Maraudes
            </button>
          </>
        ) : (
          <p>Erreur lors du chargement des informations de paiement.</p>
        )}
      </div>
    </div>
  );
}