(function addEmailForm() {
    // Spawn a fake e-mail field to trick password manager into offering masked e-mail generation
    const html = `
        <form style="position: fixed; top: 0%; right: 5%; z-index: 9999;">
            <label for="email" style="display: none;">Email</label>
            <input 
                id="masked-email-helper" 
                type="email" 
                name="email" 
                autocomplete="email"
                style="font-size: 100%; padding: 0.5em; height: 100%; width: 100%;"
            >
            <button type="submit">🆭</button>
        </form>
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
    document.getElementById('masked-email-helper').focus();
})();
