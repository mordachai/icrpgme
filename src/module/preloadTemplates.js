export async function preloadTemplates() {
  const templatePaths = [
    // Add paths to "systems/icrpgme/templates"
    // Character sheet
    'systems/icrpgme/templates/actor/character-sheet.html',
    'systems/icrpgme/templates/actor/tabs/character-primary-tab.html',
    'systems/icrpgme/templates/actor/tabs/character-loot-tab.html',

    // Chat messages
    'systems/icrpgme/templates/chat/roll.html',

    // Apps
    'systems/icrpgme/templates/app/target-app.html',
  ];

  Roll.CHAT_TEMPLATE = 'systems/icrpgme/templates/chat/roll.html';
  return loadTemplates(templatePaths);
}
