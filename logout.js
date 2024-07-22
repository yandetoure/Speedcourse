// logout.js
document.addEventListener('DOMContentLoaded', () => {
    // Assurez-vous que vous avez initialisé Supabase
    const { createClient } = supabase;
    const url = "https://zjazvgpfizeesuwwqivp.supabase.co";
    const key = "YOUR_SUPABASE_ANON_KEY";
    const supabase = createClient(url, key);

    // Fonction pour se déconnecter
    async function logout() {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Erreur lors de la déconnexion:', error.message);
        } else {
            // Rediriger vers la page de connexion après la déconnexion
            window.location.href = 'login.html'; // Assurez-vous que le chemin est correct
        }
    }

    // Déconnecter l'utilisateur lorsque le lien de déconnexion est cliqué
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', logout);
    }
});
