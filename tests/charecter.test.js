import Bowman from "../src/Bowman";
import Swordsman from "../src/Swordsman";
import Magician from "../src/Magician";
import Daemon from "../src/Daemon";
import Undead from "../src/Undead";
import Zombie from "../src/Zombie";
import Character from "../src/characters"; 

test("Correct creation and error handling for all classes", () => {
  const results = [];

  results.push({ ...new Bowman("Boba") });
  results.push({ ...new Swordsman("Sword") });
  results.push({ ...new Magician("Mage") });
  results.push({ ...new Daemon("Daemon") });
  results.push({ ...new Undead("Undead") });
  results.push({ ...new Zombie("Zombie") });

    // Проверка на ошибку имени
  try {
    // слишком короткое
    new Bowman("A");
  } catch (e) {
    results.push(e.message);
  }
  try {
    // слишком длинное
    new Bowman("A".repeat(11));
  } catch (e) {
    results.push(e.message);
  }
    // Проверка на ошибку типа
  try {
    new Character("Name", "Hero");
  } catch (e) {
    results.push(e.message);
  }

  expect(results).toEqual([
    {
      name: "Boba",
      type: "Bowman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: "Sword",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: "Mage",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: "Daemon",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    },
    {
      name: "Undead",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    },
    {
      name: "Zombie",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    "Имя должно быть строкой от 2 до 10",
    "Имя должно быть строкой от 2 до 10",
    "Тип должен быть один из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie",
  ]);
});

test("levelUp обновляет характеристики персонажа", () => {
  const bowman = new Bowman("Robin");
  bowman.health = 50;
  bowman.attack = 30;
  bowman.defence = 20;

  bowman.levelUp();

  expect({
    name: bowman.name,
    type: bowman.type,
    health: bowman.health,
    level: bowman.level,
    attack: bowman.attack,
    defence: bowman.defence,
  }).toEqual({
    name: "Robin",
    type: "Bowman",
    health: 100,
    level: 2,
    attack: 36,    // 30 * 1.2
    defence: 24,   // 20 * 1.2
  });
});

test("levelUp выбрасывает ошибку для умершего персонажа", () => {
  const undead = new Undead("Ghost");
  undead.health = 0;
  let error;
  try {
    undead.levelUp();
  } catch (e) {
    error = e.message;
  }
  expect(error).toBe("Нельзя повысить уровень умершего персонажа");
});