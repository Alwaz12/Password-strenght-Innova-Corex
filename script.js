function calculatePasswordStrength(password) {
    var passwordStrength = 'weak';
    
    if (password.match(/[a-z]+/) && password.match(/[A-Z]+/) && password.match(/[0-9]+/) && password.match(/[$-/:-?{-~!"^_`\[\]]/)) {
      if (password.length >= 12) {
        passwordStrength = 'strong';
      } else if (password.length >= 8) {
        passwordStrength = 'medium';
      }
    }
    
    return passwordStrength;
  }
  
  $(document).ready(function() {
    $('#password').on('input', function() {
      var password = $(this).val();
      $('#ipass').text(password);
      var passwordStrength = calculatePasswordStrength(password);
      var progressBar = $('#password-strength .progress-bar');
      var conditionsMet = [false, false, false, false, false, false];
      
      if (password.match(/[a-z]+/)) {
        conditionsMet[0] = true;
      }
      
      if (password.match(/[A-Z]+/)) {
        conditionsMet[1] = true;
      }
      
      if (password.match(/[0-9]+/)) {
        conditionsMet[2] = true;
      }
      
      if (password.match(/[$-/:-?{-~!"^_`\[\]]/)) {
        conditionsMet[3] = true;
      }
      
      if (password.length >= 8) {
        conditionsMet[4] = true;
      }
      
      if (password.length >= 12) {
        conditionsMet[5] = true;
      }
      
      $('#password-conditions .password-condition').each(function(index) {
        if (conditionsMet[index]) {
          $(this).addClass('met');
        } else {
          $(this).removeClass('met');
        }
      });
      
      switch(passwordStrength) {
        case 'weak':
          progressBar.removeClass('bg-warning bg-success').addClass('bg-danger').css('width', '25%').text('Weak');
          break;
        case 'medium':
          progressBar.removeClass('bg-danger bg-success').addClass('bg-warning').css('width', '50%').text('Medium');
          break;
        case 'strong':
          progressBar.removeClass('bg-danger bg-warning').addClass('bg-success').css('width', '100%').text('Strong');
          break;
        default:
          progressBar.removeClass('bg-warning bg-success').addClass('bg-danger').css('width', '25%').text('');
      }
    });
  });
  