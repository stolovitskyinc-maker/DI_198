// =========================================================================
// SECURITY CONFIGURATION [Feedback #4]
// Paste your key here to test locally. Remove before pushing to GitHub!
// =========================================================================
const API_KEY = "YOUR_API_KEY_HERE"; 

// FIXED: Exact string literal syntax explicitly including the mandatory /v6/ path [Feedback #1]
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

// 1. Retrieve elements from the DOM using clean structural constants [Feedback #3]
const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');
const switchBtn = document.getElementById('switch-btn');
const convertBtn = document.getElementById('convert-btn');

const loadingDiv = document.getElementById('loading');
const errorDiv = document.getElementById('error');
const outputText = document.getElementById('output-text');

// Clean layout visibility state helper [Feedback #3]
function toggleStatus(state) {
    loadingDiv.classList.add('hidden');
    errorDiv.classList.add('hidden');
    outputText.classList.add('hidden');

    if (state === 'loading') loadingDiv.classList.remove('hidden');
    if (state === 'error') errorDiv.classList.remove('hidden');
    if (state === 'success') outputText.classList.remove('hidden');
}

// 2. Fetch all supported codes for choice selectors [Feedback #2]
async function initializeCurrencies() {
    toggleStatus('loading');
    
    // Security verification placeholder validation check [Feedback #4]
    if (API_KEY === "YOUR_API_KEY_HERE" || API_KEY === "") {
        errorDiv.innerText = "Security Check: Replace placeholder with your active ExchangeRate-API key at the top of script.js.";
        toggleStatus('error');
        return;
    }

    const endpoint = `${BASE_URL}/codes`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Network system returned fault status: ${response.status}`);
        
        const data = await response.json();
        if (data.result === "error") throw new Error(`API Error: ${data['error-type']}`);
        
        populateDropdowns(data.supported_codes);
        toggleStatus('success');
    } catch (err) {
        errorDiv.innerText = `Initialization Failure: ${err.message}`;
        toggleStatus('error');
    }
}

// Full execution logic for populating UI select option tags [Feedback #2]
function populateDropdowns(codes) {
    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    codes.forEach(([code, name]) => {
        const optionFrom = new Option(`${code} - ${name}`, code);
        const optionTo = new Option(`${code} - ${name}`, code);
        
        fromSelect.add(optionFrom);
        toSelect.add(optionTo);
    });

    // Default configuration targets
    fromSelect.value = "USD";
    toSelect.value = "EUR";

    fromSelect.disabled = false;
    toSelect.disabled = false;
}

// 3. Full execution calculations engine passing optimal amount queries [Feedback #2]
async function executeConversion() {
    const fromCode = fromSelect.value;
    const toCode = toSelect.value;
    const amount = amountInput.value;

    if (!amount || amount <= 0) {
        errorDiv.innerText = "Please enter a numeric currency amount value greater than zero.";
        toggleStatus('error');
        return;
    }

    toggleStatus('loading');

    const endpoint = `${BASE_URL}/pair/${fromCode}/${toCode}/${amount}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`Network system returned fault status: ${response.status}`);
        
        const data = await response.json();
        if (data.result === "error") throw new Error(`API Error: ${data['error-type']}`);

        const totalConverted = data.conversion_result.toFixed(2);
        const individualRate = data.conversion_rate.toFixed(4);
        
        outputText.innerHTML = `
            <h3>${amount} ${fromCode} = <strong>${totalConverted} ${toCode}</strong></h3>
            <p>1 ${fromCode} = ${individualRate} ${toCode}</p>
        `;
        toggleStatus('success');
    } catch (err) {
        errorDiv.innerText = `Conversion Failure: ${err.message}`;
        toggleStatus('error');
    }
}

// Full execution handler for inversion button functionality [Feedback #2]
function swapCurrencies() {
    const temporaryValue = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temporaryValue;
    
    // Instantly execute conversion calculation with the newly swapped selection pairs
    executeConversion();
}

// Functional event hooks setup linking interactive UI elements [Feedback #2]
convertBtn.addEventListener('click', executeConversion);
switchBtn.addEventListener('click', swapCurrencies);
document.addEventListener('DOMContentLoaded', initializeCurrencies);
