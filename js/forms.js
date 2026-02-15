/**
 * ICIDA.COM.CY - Form Handling
 * FormSubmit Integration + WhatsApp Support
 */

class FormHandler {
  constructor() {
    this.forms = document.querySelectorAll('form[data-form-type]');
    this.init();
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e, form));
    });

    // Real-time validation
    this.setupValidation();
  }

  async handleSubmit(e, form) {
    e.preventDefault();

    const formType = form.getAttribute('data-form-type');
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Validate
    if (!this.validateForm(form)) {
      this.showMessage(form, 'error', languageManager.t('form.error'));
      return;
    }

    // Show loading state
    const submitBtn = form.querySelector('[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '...';

    try {
      // Submit via FormSubmit
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        this.showMessage(form, 'success', languageManager.t('form.success'));
        form.reset();

        // Optional: Send WhatsApp notification
        if (form.dataset.whatsapp === 'true') {
          this.sendWhatsAppNotification(data, formType);
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      this.showMessage(form, 'error', languageManager.t('form.error'));
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  }

  validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('[required]');

    inputs.forEach(input => {
      const errorElement = input.parentElement.querySelector('.form-error');

      if (!input.value.trim()) {
        isValid = false;
        input.classList.add('error');
        if (errorElement) {
          errorElement.textContent = languageManager.t('form.required');
          errorElement.style.display = 'block';
        }
      } else {
        input.classList.remove('error');
        if (errorElement) {
          errorElement.style.display = 'none';
        }
      }

      // Email validation
      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
          input.classList.add('error');
          if (errorElement) {
            errorElement.textContent = 'Invalid email format';
            errorElement.style.display = 'block';
          }
        }
      }
    });

    return isValid;
  }

  setupValidation() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');

    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        const errorElement = input.parentElement.querySelector('.form-error');

        if (!input.value.trim()) {
          input.classList.add('error');
          if (errorElement) {
            errorElement.textContent = languageManager.t('form.required');
            errorElement.style.display = 'block';
          }
        } else {
          input.classList.remove('error');
          if (errorElement) {
            errorElement.style.display = 'none';
          }
        }
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('error') && input.value.trim()) {
          input.classList.remove('error');
          const errorElement = input.parentElement.querySelector('.form-error');
          if (errorElement) {
            errorElement.style.display = 'none';
          }
        }
      });
    });
  }

  showMessage(form, type, message) {
    // Remove existing messages
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message--${type}`;
    messageEl.textContent = message;

    // Insert before submit button
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.parentElement.insertBefore(messageEl, submitBtn);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      messageEl.remove();
    }, 5000);
  }

  sendWhatsAppNotification(data, formType) {
    // REPLACE WITH YOUR WHATSAPP NUMBER (with country code, no + or spaces)
    const whatsappNumber = '35799368000'; // Official ICIDA contact number

    let message = `🔔 New ${formType} Form Submission\n\n`;

    Object.entries(data).forEach(([key, value]) => {
      message += `${key}: ${value}\n`;
    });

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Optional: Open WhatsApp in new tab (you may want to remove this for production)
    // window.open(whatsappUrl, '_blank');

    console.log('WhatsApp URL:', whatsappUrl);
  }
}

// Initialize form handler when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new FormHandler();
});
