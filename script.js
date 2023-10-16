function setupContainer(container) {
    const labels = container.querySelectorAll('label');

    for (let i = 0; i < labels.length; i++) {
        labels[i].addEventListener('click', function () {
            for (let j = 0; j < labels.length; j++) {
                labels[j].classList.remove('selected');
            }

            for (let k = 0; k < labels.length; k++) {
                labels[k].querySelector('.progress-bar').style.width = '0%';
                labels[k].querySelector('.progress').style.display = 'none';
            }

            setTimeout(function () {
                for (let k = 0; k < labels.length; k++) {
                    const values = labels[k].querySelector('.progress-bar').style.getPropertyValue('--w');
                    labels[k].querySelector('.progress-bar').style.width = values + "%";
                    labels[k].querySelector('.progress').style.display = 'block';
                }
            }, 500);
            this.classList.add('selected');
        });
    }

    const button = container.querySelector('#button');

    button.addEventListener('click', function () {
        // Clone the container div
        const clonedContainer = container.cloneNode(true);

        // Reset progress bars in the cloned container
        const clonedLabels = clonedContainer.querySelectorAll('label');
        for (let k = 0; k < clonedLabels.length; k++) {
            clonedLabels[k].querySelector('.progress-bar').style.width = '0%';
            clonedLabels[k].querySelector('.progress').style.display = 'none';
        }

        // Append the cloned div below the original div
        container.parentNode.appendChild(clonedContainer);

        // Setup event listeners for the cloned container
        setupContainer(clonedContainer);
    });
}

// Setup event listeners for the initial container
setupContainer(document.querySelector('.container'));