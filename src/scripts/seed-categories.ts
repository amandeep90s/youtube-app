import { db } from '@/db';
import { categoriesTable } from '@/db/schema';

const categoryNames = [
  'Cars and vehicles',
  'Comedy',
  'Education',
  'Gaming',
  'Entertainment',
  'Film and animation',
  'Music',
  'How-to and style',
  'News and politics',
  'People and blogs',
  'Pets and animals',
  'Science and technology',
  'Sports',
  'Travel and events',
];

async function main() {
  console.log('Seeding categories...');
  try {
    const values = categoryNames.map((categoryName) => {
      return {
        name: categoryName,
        description: `Videos related to ${categoryName.toLowerCase()} category.`,
      };
    });

    await db.insert(categoriesTable).values(values);
  } catch (e) {
    console.error('Error seeding categories: ', e);
    process.exit(1);
  }
}

main().then(() => {
  console.log('Seeding categories completed.');
  process.exit(0);
});
