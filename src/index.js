import _ from 'lodash';

import './style.css';
import Icon from './webpack-icon.svg';

const component = () => {
    const element = document.createElement('h2');

    element.innerHTML = _.join(['Webdspack', 'boilerplate'], ' ');
    element.classList.add('title');

    const icon = new Image();
    icon.src = Icon;
    icon.classList.add('icon');

    element.appendChild(icon);

    return element;
};

document.body.appendChild(component());
