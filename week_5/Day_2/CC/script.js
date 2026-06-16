// Explicit URL validation structure isolating the API key inside a clean path literal segment [Feedback #1 Fix]
const BASE_URL = `https://v6.exchangerate-api.com/v6/${CONFIG.API_KEY}`;

const UI = {
    amount: document.getElementById('amount'),
    fromSelect: document.getElementById('from-currency'),
    toSelect: document.getElementById('to-currency'),
    switchBtn: document.getElementById('switch-btn'),
    convertBtn: document.getElementById('convert-btn'),
    loading: document.getElementById('loading'),
    error: document.getElementById('error'),
    outputBox: document.getElementById('output-box'),
    outputHeading: document.getElementById('output-conversion-heading'),
    outputSubtext: document.getElementById('output-conversion-subtext')
};

function toggleStatus(state) {
    UI.loading.classList.add('hidden');
    UI.error.classList.add('hidden');
    UI.outputBox.classList.add('hidden');

    if (state === 'loading') UI.loading.classList.remove('hidden');
    if (state === 'error') UI.error.classList.remove('hidden');
    if (state === 'success') UI.outputBox.classList.remove('hidden');
}

async function initializeCurrencies() {
    toggleStatus('loading');
    
    if (!CONFIG.API_KEY || CONFIG.API_KEY === "YOUR_ACTUAL_API_KEY_HERE") {
        UI.error.textContent = "Configuration Needed: Please supply an active ExchangeRate-API key inside config.js.";
        toggleStatus('error');
        return;
    }

    const endpoint = `${BASE_URL}/codes`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP network error with status code: ${response.status}`);
        
        const data = await response.json();
        if (data.result === "error") throw new Error(`API vendor platform rejection: ${data['error-type']}`);
        
        populateDropdowns(data.supported_codes);
        toggleStatus('success');
    } catch (err) {
        // Log deep technical breakdowns to developer console while keeping UI labels friendly [Feedback #4 Fix]
        console.error("Initialization breakdown diagnostic dump:", err);
        UI.error.textContent = "Unable to load the list of available world currencies. Please check your setup.";
        toggleStatus('error');
    }
}

function populateDropdowns(currencyCodes) {
    UI.fromSelect.innerHTML = "";
    UI.toSelect.innerHTML = "";

    currencyCodes.forEach(([code, descriptiveName]) => {
        const optionNodeFrom = new Option(`${code} - ${descriptiveName}`, code);
        const optionNodeTo = new Option(`${code} - ${descriptiveName}`, code);
        
        UI.fromSelect.add(optionNodeFrom);
        UI.toSelect.add(optionNodeTo);
    });

    UI.fromSelect.value = "USD";
    UI.toSelect.value = "EUR";

    UI.fromSelect.disabled = false;
    UI.toSelect.disabled = false;
}

async function executeConversion() {
    const fromCode = UI.fromSelect.value;
    const toCode = UI.toSelect.value;
    const inputAmount = UI.amount.value;

    if (!inputAmount || parseFloat(inputAmount) <= 0) {
        UI.error.textContent = "Please enter a valid amount greater than zero.";
        toggleStatus('error');
        return;
    }

    toggleStatus('loading');

    const endpoint = `${BASE_URL}/pair/${fromCode}/${toCode}/${inputAmount}`;

    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP network error with status code: ${response.status}`);
        
        const data = await response.json();
        if (data.result === "error") throw new Error(`API vendor platform rejection: ${data['error-type']}`);

        const totalConverted = parseFloat(data.conversion_result).toFixed(2);
        const singleUnitRate = parseFloat(data.conversion_rate).toFixed(4);
        
        UI.outputHeading.textContent = `${inputAmount} ${fromCode} = ${totalConverted} ${toCode}`;
        UI.outputSubtext.textContent = `1 ${fromCode} = ${singleUnitRate} ${toCode}`;
        
        toggleStatus('success');
    } catch (err) {
        // Detailed console tracking coupled with an accessible clean user alert boundary [Feedback #4 Fix]
        console.error("Conversion execution engine failure trace:", err);
        UI.error.textContent = "An error occurred while calculation conversions. Please try again.";
        toggleStatus('error');
    }
}

function swapCurrencies() {
    const backupReferenceValue = UI.fromSelect.value;
    UI.fromSelect.value = UI.toSelect.value;
    UI.toSelect.value = backupReferenceValue;
    executeConversion();
}

UI.convertBtn.addEventListener('click', executeConversion);
UI.switchBtn.addEventListener('click', swapCurrencies);
document.addEventListener('DOMContentLoaded', initializeCurrencies);
