//Кастомный чекбокс 
export default function toggleCheckBox() {

    const checkBox = document.querySelectorAll('.filter-check_checkbox');

    checkBox.forEach((element) => {
        element.addEventListener('change', function() {
            if (this.checked) { 
                this.nextElementSibling.classList.add('checked');
            } else {
                this.nextElementSibling.classList.remove('checked');
            }
        });
    });
}