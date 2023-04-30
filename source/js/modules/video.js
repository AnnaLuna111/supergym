const video = document.querySelector('.about__video');
const link = document.querySelector('.about__link');
const button = document.querySelector('.about__button');
const iframeBlock = video.querySelector('[data-video-container]');

const createIframe = (block) => {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('width', 364);
  iframe.setAttribute('height', 228);
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', block.dataset.src);

  return iframe;
};

const initVideo = () => {
  link.removeAttribute('href');

  button.addEventListener('click', () => {
    if (video && iframeBlock) {
      button.remove();
      link.remove();
      const newIframe = createIframe(iframeBlock);
      iframeBlock.append(newIframe);
    }
  });
};

export {initVideo};
