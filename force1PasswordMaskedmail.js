(function addEmailForm() {
    // Spawn fake e-mail input field
    const html = `
        <form>
            <label for="email" style="display: none;">Email</label>
            <input 
                id="op-masked-email-helper" 
                type="email" 
                name="email" 
                autocomplete="email"
            >
            <button type="submit">Submit</button>
        </form>
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
    document.getElementById('op-masked-email-helper').focus();
})();
