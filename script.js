// Liaison avec la base de données dans supabase
const { createClient } = supabase;
const url = "https://zjazvgpfizeesuwwqivp.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqYXp2Z3BmaXplZXN1d3dxaXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzMTg3ODUsImV4cCI6MjAzNjg5NDc4NX0.uGh0CBCzJv611vEEboB-0dBm17MaO3PLYwYnxmjfODQ";
const database = createClient(url, key);
const save = document.querySelector("#save");


document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');

    const headerSection = `
        <div class="text-center mb-4">
            <h2>Vous avez une course à faire aujourd'hui !</h2>
        </div>
    `;

    const tableSection = (headerColor) => `
        <div class="card mb-4">
            <div class="card-header text-white ${headerColor}">
                <h4>Soupe aux légumes</h4>
                <p>Pour la liste des légumes</p>
            </div>
            <div class="card-body">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Quantité</th>
                            <th>Prix</th>
                            <th>Statut</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tomate</td>
                            <td>5</td>
                            <td>100 FCFA</td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>Carotte</td>
                            <td>3</td>
                            <td>150 FCFA</td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>Tomate</td>
                            <td>2</td>
                            <td>100 FCFA</td>
                            <td><input type="checkbox"></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="3">Total</td>
                            <td>350 FCFA</td>
                        </tr>
                    </tfoot>
                </table>
                <button class="btn btn-primary">Modifier</button>
                <button class="btn btn-danger">Supprimer</button>
            </div>
        </div>
    `;

    app.innerHTML = `
        ${headerSection}
        <div class="container mt-5">
            ${tableSection('bg-danger')}
            ${tableSection('bg-success')}
            ${tableSection('bg-danger')}
        </div>
    `;
});
