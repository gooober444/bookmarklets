(function forceEmailForm() {
    // This will spawn a form that will trigger 1Password's ability to generate a masked e-mail for the domain
    const html = '<form><label for="email" style="display: none;">Email</label><input id="op-masked-email-helper" type="email" name="email" autocomplete="email"><button type="submit">Submit</button></form>';
    
    // Insert the form at the beginning of the document body
    document.body.insertAdjacentHTML('afterbegin', html);
    
    // Focus on the email input field
    document.getElementById('op-masked-email-helper').focus();
} )();
