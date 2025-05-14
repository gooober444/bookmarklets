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
                style="font-size: 125%; padding: 8px; height: 125%; width: 125%;"
            >
            <button type="submit">Submit</button>
        </form>
    `;

    document.body.insertAdjacentHTML('afterbegin', html);
    document.getElementById('masked-email-helper').focus();
})();
