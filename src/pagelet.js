class Pagelet {
  constructor(content) {
    this.content = content;
  }

  initialize() {
    // do something with props
  }

  load() {
    // simulate success
    return Promise.resolve();

    // simulate error
    // return Promise.reject();
  }

  mount(pageletContentContainer) {
    pageletContentContainer.mountNode.append(this.content);
    pageletContentContainer.pageletDidRender();

    return Promise.resolve();
  }

  unmount(context) {
  }
}

module.exports.default = Pagelet;
