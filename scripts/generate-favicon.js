const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [16, 32, 48, 64, 128, 256];
const inputFile = path.join(__dirname, '../public/UCAG.png');
const outputDir = path.join(__dirname, '../public');

async function generateFavicons() {
  console.log('🎨 Génération des favicons à partir du logo UCAG...\n');

  try {
    // Vérifier que le fichier source existe
    if (!fs.existsSync(inputFile)) {
      console.error('❌ Erreur: Le fichier UCAG.png n\'existe pas dans le dossier public/');
      process.exit(1);
    }

    // Générer favicon.ico (multi-tailles)
    console.log('📦 Génération de favicon.ico...');
    await sharp(inputFile)
      .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('✅ favicon.ico créé (32x32)');

    // Générer apple-touch-icon
    console.log('\n🍎 Génération de apple-touch-icon.png...');
    await sharp(inputFile)
      .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));
    console.log('✅ apple-touch-icon.png créé (180x180)');

    // Générer différentes tailles pour Android/PWA
    console.log('\n📱 Génération des icônes pour Android/PWA...');
    for (const size of [192, 512]) {
      await sharp(inputFile)
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toFile(path.join(outputDir, `icon-${size}x${size}.png`));
      console.log(`✅ icon-${size}x${size}.png créé`);
    }

    // Générer favicon-16x16 et favicon-32x32
    console.log('\n🖼️  Génération des favicons PNG...');
    for (const size of [16, 32]) {
      await sharp(inputFile)
        .resize(size, size, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`));
      console.log(`✅ favicon-${size}x${size}.png créé`);
    }

    console.log('\n✨ Tous les favicons ont été générés avec succès!');
    console.log('\n📝 Fichiers créés:');
    console.log('   - favicon.ico');
    console.log('   - apple-touch-icon.png');
    console.log('   - icon-192x192.png');
    console.log('   - icon-512x512.png');
    console.log('   - favicon-16x16.png');
    console.log('   - favicon-32x32.png');

  } catch (error) {
    console.error('❌ Erreur lors de la génération des favicons:', error);
    process.exit(1);
  }
}

generateFavicons();
