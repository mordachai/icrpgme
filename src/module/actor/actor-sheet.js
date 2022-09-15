export default class ICRPGActorSheet extends ActorSheet {
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      classes: ['icrpg-actor-sheet'],
      width: 920,
      height: 620,
      tabs: [
        {
          group: 'primary-tabs',
          navSelector: '.icrpg-sheet-nav',
          contentSelector: '.icrpg-tab-container',
          initial: 'primary',
        },
      ],
      scrollY: [],
    });
  }

  get template() {
    return 'systems/icrpgme/templates/actor/character-sheet.html';
  }

  async getData() {
    const content = super.getData();
    content.system = this.actor.system;
    return content;
  }
}
