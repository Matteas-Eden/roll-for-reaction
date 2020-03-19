# Adapting DnD for react-rpg

## Character Stats
The ability scores from DnD are fully retained as character stats in *Roll For Reaction*, but some of the typical character stats on top of that are neglected. For example, the skills aren't particularly important, so they are dropped completely. These are things like *Persuasion*, *Acrobatics*, etc. They are quite important in DnD, but due to the heavy combat focus of this game they can be left out of the design. Other proficiencies could be retained, for the sake of making certain classes better with certain weapons. *Passive perception* is left out, as it isn't planned to be used. Armour class could be useful, but I'm tempted to replace it with evasion based on dexterity instead. However, retaining AC would mean that armour items could be utilised, which allows us to reuse assets from *react-rpg*. *Initiative* will be replaced with *Reaction* in accordance with the game's title, and will most likely remain unchanged otherwise.

### Ability Scores
Ability scores are associated explicitly with a certain player stat, and have a natural maximum of 20 (excludes bonuses from items).
- Strength: Attack roll bonus for melee, the amount that can be carried
- Dexterity: Determines reaction, attack roll bonus for ranger, assists with AC
- Wisdom: Intimidate/persuade non-human enemies
- Intelligence: Determines spellcasting attack roll bonus
- Charisma: Intimidate/persuade human enemies
- Constitution: Determines health

## Miscellaneous Removals
Short and long rests aren't particularly conducive to the manner of game we are creating, so they will be dropped. Subsequent systems that rely on rests will also be reworked, i.e. spell slots. Instead, spell slots will refresh on a time-based system. Different levels of spell slot refresh at different rates, with higher levels naturally taking longer. Cantrips are retained, as are special abilities that do not take spell slots. Such abilities, which in DnD might only be able to be used once per short/long rest, will have their own independent cooldown.

Perhaps rests could be included as a way to recharge health and automatically refresh cooldowns, but I think it would slow down the game if they were necessary even when the player is at full health.

## Spells
Most classes will have access to spells, even if they are quite simple. I'm unsure how much development time can be allocated to classes like Wizard having lots of spells, but I suppose I'm aiming for around 30 fairly basic sounding spells of varying strengths. A lot of spells can be duplicated for damage type, so the total number of unique spells could be lower, maybe about half that number. As previously mentioned, I plan to retain spell slots and cantrips. Spell slots will be cooldown based, but retain their levels so that lower level spells can be upcasted. There is no disctinction between 'prepared' spells and 'known' spells, due to the elimination of rests. 

## Combat
At the beginning of combat, the player rolls for reaction. If they roll higher than the enemy group they are facing, then they take the first turn. Otherwise, the enemy takes the first turn. The highest level enemy in the group of enemies rolls against the player, and there is no disadvantage for the player when facing multiple enemies - 20 enemies still roll a single reaction with no bonuses as if they were a single enemy. 

Combat is naturally turn-based, with the player taking a turn and then the enemies taking their turn. Each turn consists of movement, an action and a bonus action. Actions are making an attack or casting a spell. Bonus actions are more varied, with cantrips and items, but also attacks and spells for some classes at certain levels.

Attacking can still use the standard combination of 'Does x hit?' and then rolling for damage. Attack rolls are calculated as normal, with damage being calculated per item as normal. Both enemies and the player must conduct these attack rolls, which therefore means that all enemies need to have a stat block.

## Levelling
Each class will follow the same levelling structure, but the specific bonuses will change per class. The max level is 20, but is far easier to achieve than in a real game of DnD. Ability score increases occur every 2 levels (2, 4, 6, etc.). Spell slot tables still exist, and are customised for each class. A class will gain a class benefit every 5th level (5, 10, 15, 20) and this is unqiue for each class.