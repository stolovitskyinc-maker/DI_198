const API_KEY = "YOUR_ACTUAL_API_KEY_HERE"; 

// FIX: Removed the extra /v6/ that causes 404 faults
const BASE_URL = `https://exchangerate-api.com{API_KEY}`;

// 1. Retrieve elements from the DOM
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const switchBtn = document.getElementById('switch-btn');
const convertBtn = document.getElementById('convert-btn');

const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const outputText = document.getElementById('output-text');

function toggleStatus(state) {
    loadingDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    outputText.classList.add('hidden');

    if (state === 'loading') loadingDiv.classList.remove('hidden');
    if (state === 'error') errorDiv.classList.remove('hidden');
    if (state === 'success') outputText.classList.remove('hidden');
}

// 2. Updated Setup: Decodes specific API error responses
async function initializeCurrencies() {
    toggleStatus('loading');
    
    if (API_KEY === "YOUR_API_KEY_HERE" || API_KEY === "") {
        errorDiv.innerText = "Setup Hint: Please paste your ExchangeRate-API key inside the quotes at the top of script.js.";
        toggleStatus('error');
        return;
    }

    const endpoint = `${BASE_URL}/codes`;

    try {
        const response = await fetch(endpoint);
        const data = await response.json();

        // Check if the API returned a formal error structure
        if (data.result === "error") {
            throw new Error(`API Error Type: "${data['error-type']}"`);
        }
        
        if (!response.ok) throw new Error("Could not contact the server.");
        
        populateDropdowns(data.supported_codes);
        toggleStatus('success');
    } catch (err) {
        // This will print "invalid-key", "inactive-account", or "quota-reached" right on your screen!
        errorDiv.innerText = `Failed to Load: ${err.message}`;
        toggleStatus('error');
    }
}

// Keep the rest of your populateDropdowns(), executeConversion(), and event listeners below this line...
