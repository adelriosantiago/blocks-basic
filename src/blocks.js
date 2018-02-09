export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks;
  let stylePrefix = c.stylePrefix;
  const flexGrid = c.flexGrid;
  const basicStyle = c.addBasicStyle;
  const clsRow = `${stylePrefix}row`;
  const clsCell = `${stylePrefix}cell`;
  const styleRow = flexGrid ? `
    .${clsRow} {
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      flex-wrap: nowrap;
      padding: 10px;
    }
    @media (max-width: 768px) {
      .${clsRow} {
        flex-wrap: wrap;
      }
    }` : `
    .${clsRow} {
      display: table;
      padding: 10px;
      width: 100%;
    }
    @media (max-width: 768px) {
      .${stylePrefix}cell, .${stylePrefix}cell30, .${stylePrefix}cell70 {
        width: 100%;
        display: block;
      }
    }`;
  const styleClm = flexGrid ? `
    .${clsCell} {
      min-height: 75px;
      flex-grow: 1;
      flex-basis: 100%;
    }` : `
    .${clsCell} {
      width: 8%;
      display: table-cell;
      height: 75px;
    }`;
  const styleClm30 = `
  .${stylePrefix}cell30 {
    width: 30%;
  }`;
  const styleClm70 = `
  .${stylePrefix}cell70 {
    width: 70%;
  }`;

  // Make row and column classes private
  const privateCls = [`.${clsRow}`, `.${clsCell}`];
  editor.on('selector:add', selector =>
    privateCls.indexOf(selector.getFullName()) >= 0 && selector.set('private', 1))

  const toAdd = name => blocks.indexOf(name) >= 0;

  toAdd('column1') && bm.add('column1', {
    label: c.labelColumn1,
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-b1'},
    content: `<div class="${stylePrefix}row" data-gjs-droppable=".${stylePrefix}cell" data-gjs-custom-name="Row">
        <div class="${stylePrefix}cell" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
      </div>
      ${ basicStyle ?
        `<style>
          ${styleRow}
          ${styleClm}
        </style>`
        : ''}`
  });

  toAdd('column2') && bm.add('column2', {
    label: c.labelColumn2,
    attributes: {class:'gjs-fonts gjs-f-b2'},
    category: 'Basic',
    content: `<div class="${stylePrefix}row" data-gjs-droppable=".${stylePrefix}cell" data-gjs-custom-name="Row">
        <div class="${stylePrefix}cell" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
        <div class="${stylePrefix}cell" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
      </div>
      ${ basicStyle ?
        `<style>
          ${styleRow}
          ${styleClm}
        </style>`
        : ''}`
  });

  toAdd('column3') && bm.add('column3', {
    label: c.labelColumn3,
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-b3'},
    content: `<div class="${stylePrefix}row" data-gjs-droppable=".${stylePrefix}cell" data-gjs-custom-name="Row">
        <div class="${stylePrefix}cell" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
        <div class="${stylePrefix}cell" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
        <div class="${stylePrefix}cell" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
      </div>
      ${ basicStyle ?
        `<style>
          ${styleRow}
          ${styleClm}
        </style>`
        : ''}`
  });

  toAdd('column3-7') && bm.add('column3-7', {
    label: c.labelColumn37,
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-b37'},
    content: `<div class="${stylePrefix}row" data-gjs-droppable=".${stylePrefix}cell" data-gjs-custom-name="Row">
        <div class="${stylePrefix}cell ${stylePrefix}cell30" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
        <div class="${stylePrefix}cell ${stylePrefix}cell70" data-gjs-draggable=".${stylePrefix}row" data-gjs-custom-name="Cell"></div>
      </div>
      ${ basicStyle ?
        `<style>
          ${styleRow}
          ${styleClm}
          ${styleClm30}
          ${styleClm70}
        </style>`
        : ''}`
  });

  toAdd('text') && bm.add('text', {
    label: c.labelText,
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-text'},
    content: {
      type:'text',
      content:'Insert your text here',
      style: {padding: '10px' },
      activeOnRender: 1
    },
  });

  toAdd('link') && bm.add('link', {
    label: c.labelLink,
    category: 'Basic',
    attributes: {class:'fa fa-link'},
    content: {
      type:'link',
      content:'Link',
      style: {color: '#d983a6'}
    },
  });

  toAdd('image') && bm.add('image', {
    label: c.labelImage,
    category: 'Basic',
    attributes: {class:'gjs-fonts gjs-f-image'},
    content: {
      style: {color: 'black'},
      type:'image',
      activeOnRender: 1
    },
  });

  toAdd('video') && bm.add('video', {
    label: c.labelVideo,
    category: 'Basic',
    attributes: {class:'fa fa-youtube-play'},
    content: {
      type: 'video',
      src: 'img/video2.webm',
      style: {
        height: '350px',
        width: '615px',
      }
    },
  });

  toAdd('map') && bm.add('map', {
    label: c.labelMap,
    category: 'Basic',
    attributes: {class:'fa fa-map-o'},
    content: {
      type: 'map',
      style: {height: '350px'}
    },
  });
}
