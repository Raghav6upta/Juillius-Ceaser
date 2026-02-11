
import { Play } from '../types';

export const playData: Play = {
  title: "The Tragedy of Julius Caesar",
  acts: [
    {
      id: "act-1",
      number: 1,
      scenes: [
        {
          id: "act-1-scene-1",
          number: 1,
          title: "Rome. A street.",
          setting: "Enter Flavius, Marullus, and certain Commoners over the stage.",
          content: [
            { id: "1-1-d1", type: "direction", text: "Enter Flavius, Marullus, and certain Commoners, including a Carpenter and a Cobbler, over the stage." },
            { id: "1-1-1", type: "dialogue", speaker: "FLAVIUS", text: "Hence! Home, you idle creatures, get you home! Is this a holiday? What, know you not, Being mechanical, you ought not walk Upon a laboring day without the sign Of your profession?—Speak, what trade art thou?" },
            { id: "1-1-6", type: "dialogue", speaker: "CARPENTER", text: "Why, sir, a carpenter." },
            { id: "1-1-7", type: "dialogue", speaker: "MARULLUS", text: "Where is thy leather apron and thy rule? What dost thou with thy best apparel on?— You, sir, what trade are you?" },
            { id: "1-1-10", type: "dialogue", speaker: "COBBLER", text: "Truly, sir, in respect of a fine workman, I am but, as you would say, a cobbler." },
            { id: "1-1-12", type: "dialogue", speaker: "MARULLUS", text: "But what trade art thou? Answer me directly." },
            { id: "1-1-13", type: "dialogue", speaker: "COBBLER", text: "A trade, sir, that I hope I may use with a safe conscience, which is indeed, sir, a mender of bad soles." },
            { id: "1-1-16", type: "dialogue", speaker: "FLAVIUS", text: "What trade, thou knave? Thou naughty knave, what trade?" },
            { id: "1-1-18", type: "dialogue", speaker: "COBBLER", text: "Nay, I beseech you, sir, be not out with me. Yet if you be out, sir, I can mend you." },
            { id: "1-1-20", type: "dialogue", speaker: "MARULLUS", text: "What mean’st thou by that? Mend me, thou saucy fellow?" },
            { id: "1-1-22", type: "dialogue", speaker: "COBBLER", text: "Why, sir, cobble you." },
            { id: "1-1-23", type: "dialogue", speaker: "FLAVIUS", text: "Thou art a cobbler, art thou?" },
            { id: "1-1-24", type: "dialogue", speaker: "COBBLER", text: "Truly, sir, all that I live by is with the awl. I meddle with no tradesman’s matters nor women’s matters, but withal I am indeed, sir, a surgeon to old shoes: when they are in great danger, I recover them." },
            { id: "1-1-30", type: "dialogue", speaker: "FLAVIUS", text: "But wherefore art not in thy shop today? Why dost thou lead these men about the streets?" },
            { id: "1-1-32", type: "dialogue", speaker: "COBBLER", text: "Truly, sir, to wear out their shoes, to get myself into more work. But indeed, sir, we make holiday to see Caesar and to rejoice in his triumph." },
            { id: "1-1-36", type: "dialogue", speaker: "MARULLUS", text: "Wherefore rejoice? What conquest brings he home? What tributaries follow him to Rome To grace in captive bonds his chariot wheels? You blocks, you stones, you worse than senseless things! O you hard hearts, you cruel men of Rome, Knew you not Pompey?", isImportant: true },
            { id: "1-1-d2", type: "direction", text: "All the Commoners exit." },
            { id: "1-1-61", type: "dialogue", speaker: "FLAVIUS", text: "Go, go, good countrymen, and for this fault Assemble all the poor men of your sort, Draw them to Tiber banks, and weep your tears Into the channel, till the lowest stream Do kiss the most exalted shores of all." },
            { id: "1-1-73", type: "dialogue", speaker: "FLAVIUS", text: "It is no matter. Let no images Be hung with Caesar’s trophies. I’ll about And drive away the vulgar from the streets; So do you too, where you perceive them thick.", isImportant: true },
            { id: "1-1-77", type: "dialogue", speaker: "FLAVIUS", text: "These growing feathers plucked from Caesar’s wing Will make him fly an ordinary pitch, Who else would soar above the view of men And keep us all in servile fearfulness.", isImportant: true },
            { id: "1-1-d3", type: "direction", text: "They exit in different directions." }
          ]
        },
        {
          id: "act-1-scene-2",
          number: 2,
          title: "A public place.",
          setting: "Enter Caesar, Antony for the course, Calphurnia, Portia, Decius, Cicero, Brutus, Cassius, Casca, a Soothsayer.",
          content: [
            { id: "1-2-d1", type: "direction", text: "Enter Caesar, Antony for the course, Calphurnia, Portia, Decius, Cicero, Brutus, Cassius, Casca, a Soothsayer; after them Marullus and Flavius and Commoners." },
            { id: "1-2-1", type: "dialogue", speaker: "CAESAR", text: "Calphurnia." },
            { id: "1-2-2", type: "dialogue", speaker: "CASCA", text: "Peace, ho! Caesar speaks." },
            { id: "1-2-3", type: "dialogue", speaker: "CAESAR", text: "Calphurnia." },
            { id: "1-2-4", type: "dialogue", speaker: "CALPHURNIA", text: "Here, my lord." },
            { id: "1-2-5", type: "dialogue", speaker: "CAESAR", text: "Stand you directly in Antonius’ way When he doth run his course.—Antonius." },
            { id: "1-2-7", type: "dialogue", speaker: "ANTONY", text: "Caesar, my lord." },
            { id: "1-2-8", type: "dialogue", speaker: "CAESAR", text: "Forget not in your speed, Antonius, To touch Calphurnia, for our elders say The barren, touchèd in this holy chase, Shake off their sterile curse." },
            { id: "1-2-12", type: "dialogue", speaker: "ANTONY", text: "I shall remember. When Caesar says “Do this,” it is performed.", isImportant: true },
            { id: "1-2-14", type: "direction", text: "Sennet." },
            { id: "1-2-15", type: "dialogue", speaker: "SOOTHSAYER", text: "Caesar." },
            { id: "1-2-16", type: "dialogue", speaker: "CAESAR", text: "Ha! Who calls?" },
            { id: "1-2-17", type: "dialogue", speaker: "CASCA", text: "Bid every noise be still. Peace, yet again!" },
            { id: "1-2-18", type: "dialogue", speaker: "CAESAR", text: "Who is it in the press that calls on me? I hear a tongue shriller than all the music Cry “Caesar.” Speak. Caesar is turned to hear." },
            { id: "1-2-21", type: "dialogue", speaker: "SOOTHSAYER", text: "Beware the ides of March.", isImportant: true },
            { id: "1-2-22", type: "dialogue", speaker: "CAESAR", text: "What man is that?" },
            { id: "1-2-23", type: "dialogue", speaker: "BRUTUS", text: "A soothsayer bids you beware the ides of March." },
            { id: "1-2-24", type: "dialogue", speaker: "CAESAR", text: "Set him before me. Let me see his face." },
            { id: "1-2-25", type: "dialogue", speaker: "CASSIUS", text: "Fellow, come from the throng. [The Soothsayer comes forward.] Look upon Caesar." },
            { id: "1-2-27", type: "dialogue", speaker: "CAESAR", text: "What sayst thou to me now? Speak once again." },
            { id: "1-2-28", type: "dialogue", speaker: "SOOTHSAYER", text: "Beware the ides of March." },
            { id: "1-2-29", type: "dialogue", speaker: "CAESAR", text: "He is a dreamer. Let us leave him. Pass." },
            { id: "1-2-d2", type: "direction", text: "Sennet. All but Brutus and Cassius exit." },
            { id: "1-2-30", type: "dialogue", speaker: "CASSIUS", text: "Will you go see the order of the course?" },
            { id: "1-2-31", type: "dialogue", speaker: "BRUTUS", text: "Not I." },
            { id: "1-2-32", type: "dialogue", speaker: "CASSIUS", text: "I pray you, do." },
            { id: "1-2-33", type: "dialogue", speaker: "BRUTUS", text: "I am not gamesome. I do lack some part Of that quick spirit that is in Antony. Let me not hinder, Cassius, your desires. I’ll leave you." },
            { id: "1-2-38", type: "dialogue", speaker: "CASSIUS", text: "Brutus, I do observe you now of late. I have not from your eyes that gentleness And show of love as I was wont to have. You bear too stubborn and too strange a hand Over your friend that loves you." },
            { id: "1-2-43", type: "dialogue", speaker: "BRUTUS", text: "Cassius, Be not deceived. If I have veiled my look, I turn the trouble of my countenance Merely upon myself. Vexèd I am Of late with passions of some difference... Than that poor Brutus, with himself at war, Forgets the shows of love to other men.", isImportant: true },
            { id: "1-2-53", type: "dialogue", speaker: "CASSIUS", text: "Then, Brutus, I have much mistook your passion, By means whereof this breast of mine hath buried Thoughts of great value, worthy cogitations. Tell me, good Brutus, can you see your face?" },
            { id: "1-2-58", type: "dialogue", speaker: "BRUTUS", text: "No, Cassius, for the eye sees not itself But by reflection, by some other things.", isImportant: true },
            { id: "1-2-60", type: "dialogue", speaker: "CASSIUS", text: "’Tis just. And it is very much lamented, Brutus, That you have no such mirrors as will turn Your hidden worthiness into your eye, That you might see your shadow. I have heard Where many of the best respect in Rome, Except immortal Caesar, speaking of Brutus... Have wished that noble Brutus had his eyes." },
            { id: "1-2-69", type: "dialogue", speaker: "BRUTUS", text: "Into what dangers would you lead me, Cassius, That you would have me seek into myself For that which is not in me?" },
            { id: "1-2-72", type: "dialogue", speaker: "CASSIUS", text: "Therefore, good Brutus, be prepared to hear. And since you know you cannot see yourself So well as by reflection, I, your glass, Will modestly discover to yourself That of yourself which you yet know not of." },
            { id: "1-2-d3", type: "direction", text: "Flourish and shout." },
            { id: "1-2-85", type: "dialogue", speaker: "BRUTUS", text: "What means this shouting? I do fear the people Choose Caesar for their king.", isImportant: true },
            { id: "1-2-87", type: "dialogue", speaker: "CASSIUS", text: "Ay, do you fear it? Then must I think you would not have it so." },
            { id: "1-2-89", type: "dialogue", speaker: "BRUTUS", text: "I would not, Cassius, yet I love him well. But wherefore do you hold me here so long? What is it that you would impart to me? If it be aught toward the general good, Set honor in one eye and death i’ th’ other And I will look on both indifferently; For let the gods so speed me as I love The name of honor more than I fear death.", isImportant: true },
            { id: "1-2-97", type: "dialogue", speaker: "CASSIUS", text: "I know that virtue to be in you, Brutus... Well, honor is the subject of my story. I cannot tell what you and other men Think of this life; but, for my single self, I had as lief not be as live to be In awe of such a thing as I myself. I was born free as Caesar; so were you; We both have fed as well, and we can both Endure the winter’s cold as well as he." },
            { id: "1-2-115", type: "dialogue", speaker: "CASSIUS", text: "With lusty sinews, throwing it aside And stemming it with hearts of controversy. But ere we could arrive the point proposed, Caesar cried “Help me, Cassius, or I sink!”" },
            { id: "1-2-140", type: "direction", text: "Shout. Flourish." },
            { id: "1-2-141", type: "dialogue", speaker: "BRUTUS", text: "Another general shout! I do believe that these applauses are For some new honors that are heaped on Caesar." },
            { id: "1-2-143", type: "dialogue", speaker: "CASSIUS", text: "Why, man, he doth bestride the narrow world Like a Colossus, and we petty men Walk under his huge legs and peep about To find ourselves dishonorable graves. Men at some time are masters of their fates. The fault, dear Brutus, is not in our stars, But in ourselves, that we are underlings.", isImportant: true },
            { id: "1-2-150", type: "dialogue", speaker: "CASSIUS", text: "“Brutus” and “Caesar”—what should be in that “Caesar”? Why should that name be sounded more than yours? Write them together, yours is as fair a name..." },
            { id: "1-2-171", type: "dialogue", speaker: "BRUTUS", text: "That you do love me, I am nothing jealous. What you would work me to, I have some aim... Brutus had rather be a villager Than to repute himself a son of Rome Under these hard conditions as this time Is like to lay upon us.", isImportant: true },
            { id: "1-2-185", type: "dialogue", speaker: "CASSIUS", text: "I am glad that my weak words Have struck but thus much show of fire from Brutus." },
            { id: "1-2-d4", type: "direction", text: "Enter Caesar and his train." },
            { id: "1-2-188", type: "dialogue", speaker: "BRUTUS", text: "The games are done, and Caesar is returning." },
            { id: "1-2-190", type: "dialogue", speaker: "CASSIUS", text: "As they pass by, pluck Casca by the sleeve, And he will, after his sour fashion, tell you What hath proceeded worthy note today." },
            { id: "1-2-202", type: "dialogue", speaker: "CAESAR", text: "Let me have men about me that are fat, Sleek-headed men, and such as sleep a-nights. Yond Cassius has a lean and hungry look. He thinks too much. Such men are dangerous.", isImportant: true },
            { id: "1-2-206", type: "dialogue", speaker: "ANTONY", text: "Fear him not, Caesar; he’s not dangerous. He is a noble Roman, and well given." },
            { id: "1-2-208", type: "dialogue", speaker: "CAESAR", text: "Would he were fatter! But I fear him not. Yet if my name were liable to fear, I do not know the man I should avoid So soon as that spare Cassius. He reads much, He is a great observer... Come on my right hand, for this ear is deaf, And tell me truly what thou think’st of him." },
            { id: "1-2-d5", type: "direction", text: "Sennet. Caesar and his train exit but Casca remains behind." },
            { id: "1-2-225", type: "dialogue", speaker: "CASCA", text: "You pulled me by the cloak. Would you speak with me?" },
            { id: "1-2-226", type: "dialogue", speaker: "BRUTUS", text: "Ay, Casca. Tell us what hath chanced today That Caesar looks so sad." },
            { id: "1-2-230", type: "dialogue", speaker: "CASCA", text: "Why, there was a crown offered him; and, being offered him, he put it by with the back of his hand, thus, and then the people fell a-shouting." },
            { id: "1-2-245", type: "dialogue", speaker: "CASSIUS", text: "Who offered him the crown?" },
            { id: "1-2-246", type: "dialogue", speaker: "CASCA", text: "Why, Antony. ... he put it by once; but for all that, to my thinking, he would fain have had it. Then he offered it to him again; then he put it by again; but to my thinking, he was very loath to lay his fingers off it. And then he offered it the third time." },
            { id: "1-2-260", type: "dialogue", speaker: "CASSIUS", text: "But soft, I pray you. What, did Caesar swoon?" },
            { id: "1-2-261", type: "dialogue", speaker: "CASCA", text: "He fell down in the marketplace and foamed at mouth and was speechless." },
            { id: "1-2-265", type: "dialogue", speaker: "BRUTUS", text: "’Tis very like; he hath the falling sickness." },
            { id: "1-2-266", type: "dialogue", speaker: "CASSIUS", text: "No, Caesar hath it not; but you and I And honest Casca, we have the falling sickness." },
            { id: "1-2-290", type: "dialogue", speaker: "CASCA", text: "Did Cicero say anything? Ay, he spoke Greek. ... Marullus and Flavius, for pulling scarves off Caesar’s images, are put to silence. Fare you well." },
            { id: "1-2-306", type: "direction", text: "Casca exits." },
            { id: "1-2-315", type: "dialogue", speaker: "BRUTUS", text: "And so it is. For this time I will leave you. Tomorrow, if you please to speak with me, I will come home to you." },
            { id: "1-2-d6", type: "direction", text: "Brutus exits." },
            { id: "1-2-320", type: "dialogue", speaker: "CASSIUS", text: "Well, Brutus, thou art noble. Yet I see Thy honorable mettle may be wrought From that it is disposed. ... Caesar’s ambition shall be glancèd at And after this, let Caesar seat him sure, For we will shake him, or worse days endure.", isImportant: true },
            { id: "1-2-d7", type: "direction", text: "He exits." }
          ]
        },
        {
          id: "act-1-scene-3",
          number: 3,
          title: "A street.",
          setting: "Thunder and lightning. Enter Casca and Cicero.",
          content: [
            { id: "1-3-d1", type: "direction", text: "Thunder and lightning. Enter Casca and Cicero." },
            { id: "1-3-1", type: "dialogue", speaker: "CICERO", text: "Good even, Casca. Brought you Caesar home? Why are you breathless? And why stare you so?" },
            { id: "1-3-3", type: "dialogue", speaker: "CASCA", text: "Are not you moved, when all the sway of earth Shakes like a thing unfirm? O Cicero, I have seen tempests... But never till tonight, never till now, Did I go through a tempest dropping fire." },
            { id: "1-3-15", type: "dialogue", speaker: "CASCA", text: "A common slave (you know him well by sight) Held up his left hand, which did flame and burn Like twenty torches joined; and yet his hand, Not sensible of fire, remained unscorched. ... Against the Capitol I met a lion, Who glazed upon me and went surly by." },
            { id: "1-3-30", type: "dialogue", speaker: "CICERO", text: "“These are their reasons, they are natural,” For I believe they are portentous things Unto the climate that they point upon. ... Comes Caesar to the Capitol tomorrow?" },
            { id: "1-3-37", type: "dialogue", speaker: "CASCA", text: "He doth, for he did bid Antonius Send word to you he would be there tomorrow." },
            { id: "1-3-40", type: "direction", text: "Cicero exits." },
            { id: "1-3-d2", type: "direction", text: "Enter Cassius." },
            { id: "1-3-41", type: "dialogue", speaker: "CASSIUS", text: "Who’s there?" },
            { id: "1-3-42", type: "dialogue", speaker: "CASCA", text: "A Roman." },
            { id: "1-3-43", type: "dialogue", speaker: "CASSIUS", text: "Casca, by your voice." },
            { id: "1-3-45", type: "dialogue", speaker: "CASCA", text: "Your ear is good. Cassius, what night is this!" },
            { id: "1-3-46", type: "dialogue", speaker: "CASSIUS", text: "A very pleasing night to honest men. ... I have walked about the streets, Submitting me unto the perilous night, And thus unbracèd, Casca, as you see, Have bared my bosom to the thunder-stone." },
            { id: "1-3-60", type: "dialogue", speaker: "CASCA", text: "But wherefore did you so much tempt the heavens? It is the part of men to fear and tremble When the most mighty gods by tokens send Such dreadful heralds to astonish us." },
            { id: "1-3-63", type: "dialogue", speaker: "CASSIUS", text: "You are dull, Casca, and those sparks of life That should be in a Roman you do want... Now could I, Casca, name to thee a man Most like this dreadful night... A man no mightier than thyself or me In personal action, yet prodigious grown." },
            { id: "1-3-81", type: "dialogue", speaker: "CASCA", text: "’Tis Caesar that you mean, is it not, Cassius?" },
            { id: "1-3-82", type: "dialogue", speaker: "CASSIUS", text: "Let it be who it is. ... Our yoke and sufferance show us womanish." },
            { id: "1-3-90", type: "dialogue", speaker: "CASCA", text: "Indeed, they say the Senators tomorrow Mean to establish Caesar as a king, And he shall wear his crown by sea and land In every place save here in Italy." },
            { id: "1-3-95", type: "dialogue", speaker: "CASSIUS", text: "I know where I will wear this dagger then; Cassius from bondage will deliver Cassius. ... If I know this, know all the world besides, That part of tyranny that I do bear I can shake off at pleasure.", isImportant: true },
            { id: "1-3-105", type: "dialogue", speaker: "CASCA", text: "So can I. So every bondman in his own hand bears The power to cancel his captivity." },
            { id: "1-3-110", type: "dialogue", speaker: "CASSIUS", text: "And why should Caesar be a tyrant, then? Poor man, I know he would not be a wolf But that he sees the Romans are but sheep; He were no lion, were not Romans hinds. ... What trash is Rome, What rubbish, and what offal when it serves For the base matter to illuminate So vile a thing as Caesar!", isImportant: true },
            { id: "1-3-120", type: "dialogue", speaker: "CASCA", text: "You speak to Casca, and to such a man That is no fleering telltale. Hold. My hand. Be factious for redress of all these griefs, And I will set this foot of mine as far As who goes farthest." },
            { id: "1-3-d3", type: "direction", text: "They shake hands." },
            { id: "1-3-125", type: "dialogue", speaker: "CASSIUS", text: "There’s a bargain made. ... And I do know by this they stay for me In Pompey’s Porch." },
            { id: "1-3-d4", type: "direction", text: "Enter Cinna." },
            { id: "1-3-145", type: "dialogue", speaker: "CINNA", text: "Yes, you are. O Cassius, if you could But win the noble Brutus to our party—" },
            { id: "1-3-148", type: "dialogue", speaker: "CASSIUS", text: "Be you content. Good Cinna, take this paper, And look you lay it in the Praetor’s chair, Where Brutus may but find it... Repair to Pompey’s Porch, where you shall find us." },
            { id: "1-3-162", type: "direction", text: "Cinna exits." },
            { id: "1-3-163", type: "dialogue", speaker: "CASCA", text: "O, he sits high in all the people’s hearts, And that which would appear offense in us His countenance, like richest alchemy, Will change to virtue and to worthiness.", isImportant: true },
            { id: "1-3-168", type: "direction", text: "They exit." }
          ]
        }
      ]
    },
    {
      id: "act-2",
      number: 2,
      scenes: [
        {
          id: "act-2-scene-1",
          number: 1,
          title: "Brutus' orchard.",
          setting: "Enter Brutus in his orchard.",
          content: [
            { id: "2-1-d1", type: "direction", text: "Enter Brutus in his orchard." },
            { id: "2-1-1", type: "dialogue", speaker: "BRUTUS", text: "What, Lucius, ho!— I cannot by the progress of the stars Give guess how near to day.—Lucius, I say!— I would it were my fault to sleep so soundly.— When, Lucius, when? Awake, I say! What, Lucius!" },
            { id: "2-1-d2", type: "direction", text: "Enter Lucius." },
            { id: "2-1-7", type: "dialogue", speaker: "LUCIUS", text: "Called you, my lord?" },
            { id: "2-1-8", type: "dialogue", speaker: "BRUTUS", text: "Get me a taper in my study, Lucius. When it is lighted, come and call me here." },
            { id: "2-1-10", type: "dialogue", speaker: "LUCIUS", text: "I will, my lord. [He exits.]" },
            { id: "2-1-11", type: "dialogue", speaker: "BRUTUS", text: "It must be by his death. And for my part I know no personal cause to spurn at him, But for the general. He would be crowned: How that might change his nature, there’s the question. It is the bright day that brings forth the adder, And that craves wary walking.", isImportant: true },
            { id: "2-1-20", type: "dialogue", speaker: "BRUTUS", text: "Remorse from power. ... But ’tis a common proof That lowliness is young ambition’s ladder, Whereto the climber-upward turns his face; But, when he once attains the upmost round, He then unto the ladder turns his back... So Caesar may. ... And therefore think him as a serpent’s egg, Which, hatched, would, as his kind, grow mischievous, And kill him in the shell.", isImportant: true },
            { id: "2-1-d3", type: "direction", text: "Enter Lucius." },
            { id: "2-1-38", type: "dialogue", speaker: "LUCIUS", text: "The taper burneth in your closet, sir. Searching the window for a flint, I found This paper, thus sealed up, and I am sure It did not lie there when I went to bed." },
            { id: "2-1-42", type: "dialogue", speaker: "BRUTUS", text: "Get you to bed again. It is not day. Is not tomorrow, boy, the ides of March?" },
            { id: "2-1-44", type: "dialogue", speaker: "LUCIUS", text: "I know not, sir." },
            { id: "2-1-45", type: "dialogue", speaker: "BRUTUS", text: "Look in the calendar, and bring me word. [Lucius exits.]" },
            { id: "2-1-47", type: "dialogue", speaker: "BRUTUS", text: "The exhalations, whizzing in the air, Give so much light that I may read by them. [Opens the letter and reads.] “Brutus, thou sleep’st. Awake, and see thyself! Shall Rome, etc. Speak, strike, redress!”" },
            { id: "2-1-58", type: "dialogue", speaker: "BRUTUS", text: "My ancestors did from the streets of Rome The Tarquin drive when he was called a king. ... O Rome, I make thee promise, If the redress will follow, thou receivest Thy full petition at the hand of Brutus." },
            { id: "2-1-d4", type: "direction", text: "Enter Lucius." },
            { id: "2-1-61", type: "dialogue", speaker: "LUCIUS", text: "Sir, March is wasted fifteen days. [Knock within.]" },
            { id: "2-1-62", type: "dialogue", speaker: "BRUTUS", text: "’Tis good. Go to the gate; somebody knocks. [Lucius exits.] Since Cassius first did whet me against Caesar, I have not slept. Between the acting of a dreadful thing And the first motion, all the interim is Like a phantasma or a hideous dream.", isImportant: true },
            { id: "2-1-75", type: "dialogue", speaker: "BRUTUS", text: "The genius and the mortal instruments Are then in council, and the state of man, Like to a little kingdom, suffers then The nature of an insurrection." },
            { id: "2-1-d5", type: "direction", text: "Enter Lucius." },
            { id: "2-1-80", type: "dialogue", speaker: "LUCIUS", text: "Sir, ’tis your brother Cassius at the door, Who doth desire to see you. ... No, sir. Their hats are plucked about their ears, And half their faces buried in their cloaks." },
            { id: "2-1-85", type: "dialogue", speaker: "BRUTUS", text: "Let ’em enter. [Lucius exits.] They are the faction. O conspiracy, Sham’st thou to show thy dang’rous brow by night, When evils are most free?", isImportant: true },
            { id: "2-1-d6", type: "direction", text: "Enter the conspirators, Cassius, Casca, Decius, Cinna, Metellus, and Trebonius." },
            { id: "2-1-95", type: "dialogue", speaker: "CASSIUS", text: "I think we are too bold upon your rest. Good morrow, Brutus. Do we trouble you?" },
            { id: "2-1-97", type: "dialogue", speaker: "BRUTUS", text: "I have been up this hour, awake all night. Know I these men that come along with you?" },
            { id: "2-1-100", type: "dialogue", speaker: "CASSIUS", text: "Yes, every man of them... This is Trebonius. ... This, Decius Brutus. ... This, Casca; this, Cinna; and this, Metellus Cimber." },
            { id: "2-1-110", type: "dialogue", speaker: "BRUTUS", text: "They are all welcome. What watchful cares do interpose themselves Betwixt your eyes and night?" },
            { id: "2-1-112", type: "dialogue", speaker: "CASSIUS", text: "Shall I entreat a word? [Brutus and Cassius whisper.]" },
            { id: "2-1-115", type: "dialogue", speaker: "DECIUS", text: "Here lies the east; doth not the day break here?" },
            { id: "2-1-125", type: "dialogue", speaker: "BRUTUS", text: "No, not an oath. If not the face of men, The sufferance of our souls, the time’s abuse— If these be motives weak, break off betimes, And every man hence to his idle bed.", isImportant: true },
            { id: "2-1-140", type: "dialogue", speaker: "BRUTUS", text: "Swear priests and cowards and men cautelous... but do not stain The even virtue of our enterprise, Nor th’ insuppressive mettle of our spirits." },
            { id: "2-1-155", type: "dialogue", speaker: "CASSIUS", text: "But what of Cicero? Shall we sound him? I think he will stand very strong with us." },
            { id: "2-1-160", type: "dialogue", speaker: "BRUTUS", text: "O, name him not! Let us not break with him, For he will never follow anything That other men begin." },
            { id: "2-1-165", type: "dialogue", speaker: "CASSIUS", text: "Then leave him out. Shall no man else be touched, but only Caesar?" },
            { id: "2-1-170", type: "dialogue", speaker: "CASSIUS", text: "Decius, well urged. I think it is not meet Mark Antony, so well beloved of Caesar, Should outlive Caesar. ... Let Antony and Caesar fall together." },
            { id: "2-1-175", type: "dialogue", speaker: "BRUTUS", text: "Our course will seem too bloody, Caius Cassius, To cut the head off and then hack the limbs... For Antony is but a limb of Caesar. Let’s be sacrificers, but not butchers, Caius. ... Let’s carve him as a dish fit for the gods, Not hew him as a carcass fit for hounds.", isImportant: true },
            { id: "2-1-d7", type: "direction", text: "Clock strikes." },
            { id: "2-1-200", type: "dialogue", speaker: "BRUTUS", text: "Peace, count the clock. The clock hath stricken three." },
            { id: "2-1-210", type: "dialogue", speaker: "CASSIUS", text: "But it is doubtful yet Whether Caesar will come forth today or no, For he is superstitious grown of late." },
            { id: "2-1-225", type: "dialogue", speaker: "DECIUS", text: "Never fear that. If he be so resolved, I can o’ersway him... for he loves to hear That unicorns may be betrayed with trees, And bears with glasses, elephants with holes, Lions with toils, and men with flatterers." },
            { id: "2-1-235", type: "dialogue", speaker: "BRUTUS", text: "Now, good Metellus, go along by him. He loves me well, and I have given him reasons. Send him but hither, and I’ll fashion him." },
            { id: "2-1-240", type: "dialogue", speaker: "CASSIUS", text: "The morning comes upon ’s. We’ll leave you, Brutus. ... show yourselves true Romans." },
            { id: "2-1-d8", type: "direction", text: "All but Brutus exit." },
            { id: "2-1-250", type: "dialogue", speaker: "BRUTUS", text: "Boy! Lucius!—Fast asleep? It is no matter. Enjoy the honey-heavy dew of slumber. Thou hast no figures nor no fantasies Which busy care draws in the brains of men." },
            { id: "2-1-d9", type: "direction", text: "Enter Portia." },
            { id: "2-1-255", type: "dialogue", speaker: "PORTIA", text: "Brutus, my lord." },
            { id: "2-1-256", type: "dialogue", speaker: "BRUTUS", text: "Portia! What mean you? Wherefore rise you now? It is not for your health thus to commit Your weak condition to the raw cold morning." },
            { id: "2-1-260", type: "dialogue", speaker: "PORTIA", text: "Nor for yours neither. You’ve ungently, Brutus, Stole from my bed. ... Make me acquainted with your cause of grief." },
            { id: "2-1-275", type: "dialogue", speaker: "BRUTUS", text: "I am not well in health, and that is all." },
            { id: "2-1-285", type: "dialogue", speaker: "PORTIA", text: "Is Brutus sick? And is it physical To walk unbracèd and suck up the humors Of the dank morning? ... I ought to know of. [She kneels.] I charm you, by my once commended beauty... That you unfold to me, your self, your half, Why you are heavy.", isImportant: true },
            { id: "2-1-300", type: "dialogue", speaker: "BRUTUS", text: "Kneel not, gentle Portia. [He lifts her up.]" },
            { id: "2-1-310", type: "dialogue", speaker: "PORTIA", text: "If this were true, then should I know this secret. I grant I am a woman, but withal A woman that Lord Brutus took to wife. ... I have made strong proof of my constancy, Giving myself a voluntary wound Here, in the thigh. Can I bear that with patience, And not my husband’s secrets?", isImportant: true },
            { id: "2-1-325", type: "dialogue", speaker: "BRUTUS", text: "O you gods, Render me worthy of this noble wife! [Knock.] Hark, hark, one knocks. Portia, go in awhile... All my engagements I will construe to thee." },
            { id: "2-1-d10", type: "direction", text: "Portia exits. Enter Lucius and Ligarius." },
            { id: "2-1-340", type: "dialogue", speaker: "BRUTUS", text: "O, what a time have you chose out, brave Caius, To wear a kerchief! Would you were not sick!" },
            { id: "2-1-342", type: "dialogue", speaker: "LIGARIUS", text: "I am not sick, if Brutus have in hand Any exploit worthy the name of honor." },
            { id: "2-1-345", type: "dialogue", speaker: "BRUTUS", text: "Such an exploit have I in hand, Ligarius, Had you a healthful ear to hear of it." },
            { id: "2-1-348", type: "dialogue", speaker: "LIGARIUS", text: "By all the gods that Romans bow before, I here discard my sickness. ... What’s to do?" },
            { id: "2-1-355", type: "dialogue", speaker: "BRUTUS", text: "A piece of work that will make sick men whole." },
            { id: "2-1-360", type: "dialogue", speaker: "LIGARIUS", text: "Set on your foot, And with a heart new-fired I follow you To do I know not what; but it sufficeth That Brutus leads me on. [Thunder.]" },
            { id: "2-1-d11", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-2-scene-2",
          number: 2,
          title: "Caesar's house.",
          setting: "Thunder and lightning. Enter Julius Caesar in his nightgown.",
          content: [
            { id: "2-2-d1", type: "direction", text: "Thunder and lightning. Enter Julius Caesar in his nightgown." },
            { id: "2-2-1", type: "dialogue", speaker: "CAESAR", text: "Nor heaven nor Earth have been at peace tonight. Thrice hath Calphurnia in her sleep cried out “Help ho, they murder Caesar!”—Who’s within?" },
            { id: "2-2-d2", type: "direction", text: "Enter a Servant." },
            { id: "2-2-5", type: "dialogue", speaker: "CAESAR", text: "Go bid the priests do present sacrifice, And bring me their opinions of success." },
            { id: "2-2-7", type: "dialogue", speaker: "SERVANT", text: "I will, my lord. [He exits.]" },
            { id: "2-2-d3", type: "direction", text: "Enter Calphurnia." },
            { id: "2-2-10", type: "dialogue", speaker: "CALPHURNIA", text: "What mean you, Caesar? Think you to walk forth? You shall not stir out of your house today." },
            { id: "2-2-12", type: "dialogue", speaker: "CAESAR", text: "Caesar shall forth. The things that threatened me Ne’er looked but on my back. When they shall see The face of Caesar, they are vanishèd." },
            { id: "2-2-15", type: "dialogue", speaker: "CALPHURNIA", text: "Caesar, I never stood on ceremonies, Yet now they fright me. ... A lioness hath whelpèd in the streets, And graves have yawned and yielded up their dead. ... Which drizzled blood upon the Capitol. ... Horses did neigh, and dying men did groan.", isImportant: true },
            { id: "2-2-30", type: "dialogue", speaker: "CALPHURNIA", text: "When beggars die there are no comets seen; The heavens themselves blaze forth the death of princes.", isImportant: true },
            { id: "2-2-35", type: "dialogue", speaker: "CAESAR", text: "Cowards die many times before their deaths; The valiant never taste of death but once. ... Seeing that death, a necessary end, Will come when it will come.", isImportant: true },
            { id: "2-2-d4", type: "direction", text: "Enter a Servant." },
            { id: "2-2-40", type: "dialogue", speaker: "SERVANT", text: "They would not have you to stir forth today. Plucking the entrails of an offering forth, They could not find a heart within the beast." },
            { id: "2-2-45", type: "dialogue", speaker: "CAESAR", text: "The gods do this in shame of cowardice. Caesar should be a beast without a heart If he should stay at home today for fear. No, Caesar shall not. Danger knows full well That Caesar is more dangerous than he. We are two lions littered in one day, And I the elder and more terrible. And Caesar shall go forth.", isImportant: true },
            { id: "2-2-55", type: "dialogue", speaker: "CALPHURNIA", text: "Do not go forth today. Call it my fear That keeps you in the house, and not your own. We’ll send Mark Antony to the Senate House, And he shall say you are not well today. [She kneels.]" },
            { id: "2-2-60", type: "dialogue", speaker: "CAESAR", text: "Mark Antony shall say I am not well, And for thy humor I will stay at home. [He lifts her up.]" },
            { id: "2-2-d5", type: "direction", text: "Enter Decius." },
            { id: "2-2-65", type: "dialogue", speaker: "DECIUS", text: "Caesar, all hail! Good morrow, worthy Caesar. I come to fetch you to the Senate House." },
            { id: "2-2-70", type: "dialogue", speaker: "CAESAR", text: "And you are come in very happy time... Tell them that I will not come today. ... The cause is in my will. I will not come.", isImportant: true },
            { id: "2-2-85", type: "dialogue", speaker: "CAESAR", text: "She dreamt tonight she saw my statue, Which, like a fountain with an hundred spouts, Did run pure blood; and many lusty Romans Came smiling and did bathe their hands in it." },
            { id: "2-2-90", type: "dialogue", speaker: "DECIUS", text: "This dream is all amiss interpreted. It was a vision fair and fortunate. Your statue spouting blood... Signifies that from you great Rome shall suck Reviving blood.", isImportant: true },
            { id: "2-2-110", type: "dialogue", speaker: "CAESAR", text: "How foolish do your fears seem now, Calphurnia! I am ashamèd I did yield to them. Give me my robe, for I will go." },
            { id: "2-2-d6", type: "direction", text: "Enter Brutus, Ligarius, Metellus, Casca, Trebonius, Cinna, and Publius." },
            { id: "2-2-125", type: "dialogue", speaker: "ANTONY", text: "Good morrow, Antony. So to most noble Caesar." },
            { id: "2-2-135", type: "dialogue", speaker: "CAESAR", text: "Good friends, go in and taste some wine with me, And we, like friends, will straightway go together." },
            { id: "2-2-137", type: "dialogue", speaker: "BRUTUS", text: "[Aside] That every like is not the same, O Caesar, The heart of Brutus earns to think upon." },
            { id: "2-2-d7", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-2-scene-3",
          number: 3,
          title: "A street near the Capitol.",
          setting: "Enter Artemidorus reading a paper.",
          content: [
            { id: "2-3-d1", type: "direction", text: "Enter Artemidorus reading a paper." },
            { id: "2-3-1", type: "dialogue", speaker: "ARTEMIDORUS", text: "Caesar, beware of Brutus, take heed of Cassius, come not near Casca... Security gives way to conspiracy. The mighty gods defend thee! ... If thou read this, O Caesar, thou mayest live; If not, the Fates with traitors do contrive.", isImportant: true },
            { id: "2-3-d2", type: "direction", text: "He exits." }
          ]
        },
        {
          id: "act-2-scene-4",
          number: 4,
          title: "Before the house of Brutus.",
          setting: "Enter Portia and Lucius.",
          content: [
            { id: "2-4-d1", type: "direction", text: "Enter Portia and Lucius." },
            { id: "2-4-1", type: "dialogue", speaker: "PORTIA", text: "I prithee, boy, run to the Senate House. Stay not to answer me, but get thee gone. Why dost thou stay?" },
            { id: "2-4-5", type: "dialogue", speaker: "PORTIA", text: "[Aside] O constancy, be strong upon my side; Set a huge mountain ’tween my heart and tongue. I have a man’s mind but a woman’s might.", isImportant: true },
            { id: "2-4-15", type: "dialogue", speaker: "PORTIA", text: "Hark, boy, what noise is that? I heard a bustling rumor like a fray, And the wind brings it from the Capitol." },
            { id: "2-4-25", type: "direction", text: "Enter the Soothsayer." },
            { id: "2-4-30", type: "dialogue", speaker: "PORTIA", text: "Is Caesar yet gone to the Capitol? Thou hast some suit to Caesar, hast thou not?" },
            { id: "2-4-35", type: "dialogue", speaker: "SOOTHSAYER", text: "That I have, lady. If it will please Caesar To be so good to Caesar as to hear me, I shall beseech him to befriend himself." },
            { id: "2-4-45", type: "dialogue", speaker: "PORTIA", text: "[Aside] Ay me, how weak a thing The heart of woman is! O Brutus, The heavens speed thee in thine enterprise! ... Run, Lucius, and commend me to my lord. Say I am merry." },
            { id: "2-4-d2", type: "direction", text: "They exit separately." }
          ]
        }
      ]
    },
    {
      id: "act-3",
      number: 3,
      scenes: [
        {
          id: "act-3-scene-1",
          number: 1,
          title: "The Capitol.",
          setting: "Flourish. Enter Caesar, Antony, Lepidus, and the conspirators.",
          content: [
            { id: "3-1-d1", type: "direction", text: "Flourish. Enter Caesar, Antony, Lepidus; Brutus, Cassius, Casca, Decius, Metellus, Trebonius, Cinna; Publius, Popilius, Artemidorus, the Soothsayer, and other Senators and Petitioners." },
            { id: "3-1-1", type: "dialogue", speaker: "CAESAR", text: "The ides of March are come." },
            { id: "3-1-2", type: "dialogue", speaker: "SOOTHSAYER", text: "Ay, Caesar, but not gone.", isImportant: true },
            { id: "3-1-10", type: "dialogue", speaker: "CAESAR", text: "What, is the fellow mad? Sirrah, give place. What, urge you your petitions in the street? Come to the Capitol." },
            { id: "3-1-d2", type: "direction", text: "Caesar goes forward, the rest following." },
            { id: "3-1-15", type: "dialogue", speaker: "POPILIUS", text: "I wish your enterprise today may thrive." },
            { id: "3-1-20", type: "dialogue", speaker: "CASSIUS", text: "Look how he makes to Caesar. Mark him. Casca, be sudden, for we fear prevention." },
            { id: "3-1-35", type: "dialogue", speaker: "CAESAR", text: "Are we all ready? What is now amiss That Caesar and his Senate must redress?" },
            { id: "3-1-45", type: "dialogue", speaker: "CAESAR", text: "I must prevent thee, Cimber. ... Thy brother by decree is banishèd. ... Know: Caesar doth not wrong, nor without cause Will he be satisfied." },
            { id: "3-1-65", type: "dialogue", speaker: "CAESAR", text: "But I am constant as the Northern Star, Of whose true fixed and resting quality There is no fellow in the firmament.", isImportant: true },
            { id: "3-1-80", type: "dialogue", speaker: "CAESAR", text: "Hence. Wilt thou lift up Olympus?" },
            { id: "3-1-85", type: "dialogue", speaker: "CASCA", text: "Speak, hands, for me!" },
            { id: "3-1-d3", type: "direction", text: "As Casca strikes, the others rise up and stab Caesar." },
            { id: "3-1-86", type: "dialogue", speaker: "CAESAR", text: "Et tu, Brutè?—Then fall, Caesar. [He dies.]", isImportant: true },
            { id: "3-1-88", type: "dialogue", speaker: "CINNA", text: "Liberty! Freedom! Tyranny is dead! Run hence, proclaim, cry it about the streets.", isImportant: true },
            { id: "3-1-115", type: "dialogue", speaker: "BRUTUS", text: "Grant that, and then is death a benefit. ... Stoop, Romans, stoop, And let us bathe our hands in Caesar’s blood Up to the elbows and besmear our swords.", isImportant: true },
            { id: "3-1-125", type: "dialogue", speaker: "CASSIUS", text: "How many ages hence Shall this our lofty scene be acted over In states unborn and accents yet unknown!", isImportant: true },
            { id: "3-1-d4", type: "direction", text: "Enter a Servant." },
            { id: "3-1-140", type: "dialogue", speaker: "SERVANT", text: "Thus, Brutus, did my master bid me kneel. ... Mark Antony shall not love Caesar dead So well as Brutus living." },
            { id: "3-1-d5", type: "direction", text: "Enter Antony." },
            { id: "3-1-165", type: "dialogue", speaker: "ANTONY", text: "O mighty Caesar, dost thou lie so low? Are all thy conquests, glories, triumphs, spoils Shrunk to this little measure? Fare thee well.", isImportant: true },
            { id: "3-1-180", type: "dialogue", speaker: "BRUTUS", text: "O Antony, beg not your death of us! ... Our arms in strength of malice, and our hearts Of brothers’ temper, do receive you in With all kind love." },
            { id: "3-1-215", type: "dialogue", speaker: "ANTONY", text: "That I did love thee, Caesar, O, ’tis true! ... Pardon me, Julius! Here wast thou bayed, brave hart, Here didst thou fall, and here thy hunters stand Signed in thy spoil and crimsoned in thy Lethe.", isImportant: true },
            { id: "3-1-260", type: "dialogue", speaker: "ANTONY", text: "Produce his body to the marketplace, And in the pulpit, as becomes a friend, Speak in the order of his funeral." },
            { id: "3-1-270", type: "dialogue", speaker: "BRUTUS", text: "Mark Antony, here, take you Caesar’s body. You shall not in your funeral speech blame us... Else shall you not have any hand at all About his funeral." },
            { id: "3-1-d6", type: "direction", text: "All but Antony exit." },
            { id: "3-1-280", type: "dialogue", speaker: "ANTONY", text: "O pardon me, thou bleeding piece of earth, That I am meek and gentle with these butchers. Thou art the ruins of the noblest man That ever livèd in the tide of times.", isImportant: true },
            { id: "3-1-300", type: "dialogue", speaker: "ANTONY", text: "Cry “Havoc!” and let slip the dogs of war, That this foul deed shall smell above the earth With carrion men groaning for burial.", isImportant: true },
            { id: "3-1-d7", type: "direction", text: "Enter Octavius’ Servant. They exit with Caesar’s body." }
          ]
        },
        {
          id: "act-3-scene-2",
          number: 2,
          title: "The Forum.",
          setting: "Enter Brutus and Cassius with the Plebeians.",
          content: [
            { id: "3-2-d1", type: "direction", text: "Enter Brutus and Cassius with the Plebeians." },
            { id: "3-2-15", type: "dialogue", speaker: "BRUTUS", text: "Romans, countrymen, and lovers, hear me for my cause, and be silent that you may hear. ... Believe me for mine honor... Censure me in your wisdom.", isImportant: true },
            { id: "3-2-25", type: "dialogue", speaker: "BRUTUS", text: "Not that I loved Caesar less, but that I loved Rome more. ... As he was valiant, I honor him. But, as he was ambitious, I slew him.", isImportant: true },
            { id: "3-2-d2", type: "direction", text: "Enter Mark Antony and others with Caesar’s body." },
            { id: "3-2-75", type: "dialogue", speaker: "ANTONY", text: "Friends, Romans, countrymen, lend me your ears. I come to bury Caesar, not to praise him. The evil that men do lives after them; The good is oft interrèd with their bones. So let it be with Caesar.", isImportant: true },
            { id: "3-2-90", type: "dialogue", speaker: "ANTONY", text: "For Brutus is an honorable man; So are they all, all honorable men. ... He was my friend, faithful and just to me, But Brutus says he was ambitious, And Brutus is an honorable man.", isImportant: true },
            { id: "3-2-100", type: "dialogue", speaker: "ANTONY", text: "When that the poor have cried, Caesar hath wept; Ambition should be made of sterner stuff. ... You all did see that on the Lupercal I thrice presented him a kingly crown, Which he did thrice refuse. Was this ambition?", isImportant: true },
            { id: "3-2-115", type: "dialogue", speaker: "ANTONY", text: "My heart is in the coffin there with Caesar, And I must pause till it come back to me. [He weeps.]" },
            { id: "3-2-140", type: "dialogue", speaker: "ANTONY", text: "But here’s a parchment with the seal of Caesar. I found it in his closet. ’Tis his will. ... Let but the commons hear this testament... They would go and kiss dead Caesar’s wounds." },
            { id: "3-2-d3", type: "direction", text: "Antony descends into the crowd." },
            { id: "3-2-180", type: "dialogue", speaker: "ANTONY", text: "If you have tears, prepare to shed them now. ... Look, in this place ran Cassius’ dagger through. See what a rent the envious Casca made. Through this the well-belovèd Brutus stabbed. ... This was the most unkindest cut of all.", isImportant: true },
            { id: "3-2-215", type: "dialogue", speaker: "ANTONY", text: "Good friends, sweet friends, let me not stir you up To such a sudden flood of mutiny. They that have done this deed are honorable. ... I am no orator, as Brutus is, But, as you know me all, a plain blunt man." },
            { id: "3-2-260", type: "dialogue", speaker: "ANTONY", text: "Here is the will, and under Caesar’s seal: To every Roman citizen he gives... seventy-five drachmas. ... Moreover, he hath left you all his walks, His private arbors, and new-planted orchards. ... Here was a Caesar! When comes such another?", isImportant: true },
            { id: "3-2-d4", type: "direction", text: "Plebeians exit with Caesar’s body. Antony exits to meet Octavius." }
          ]
        },
        {
          id: "act-3-scene-3",
          number: 3,
          title: "A street.",
          setting: "Enter Cinna the poet and after him the Plebeians.",
          content: [
            { id: "3-3-d1", type: "direction", text: "Enter Cinna the poet and after him the Plebeians." },
            { id: "3-3-1", type: "dialogue", speaker: "CINNA THE POET", text: "I dreamt tonight that I did feast with Caesar, And things unluckily charge my fantasy. I have no will to wander forth of doors, Yet something leads me forth." },
            { id: "3-3-30", type: "dialogue", speaker: "PLEBEIAN", text: "Tear him to pieces! He’s a conspirator." },
            { id: "3-3-31", type: "dialogue", speaker: "CINNA THE POET", text: "I am Cinna the poet, I am Cinna the poet!" },
            { id: "3-3-33", type: "dialogue", speaker: "PLEBEIAN", text: "Tear him for his bad verses, tear him for his bad verses! ... It is no matter. His name’s Cinna." },
            { id: "3-3-d2", type: "direction", text: "All the Plebeians exit, carrying off Cinna." }
          ]
        }
      ]
    },
    {
      id: "act-4",
      number: 4,
      scenes: [
        {
          id: "act-4-scene-1",
          number: 1,
          title: "Rome. Antony's house.",
          setting: "Enter Antony, Octavius, and Lepidus.",
          content: [
            { id: "4-1-d1", type: "direction", text: "Enter Antony, Octavius, and Lepidus." },
            { id: "4-1-1", type: "dialogue", speaker: "ANTONY", text: "These many, then, shall die; their names are pricked." },
            { id: "4-1-15", type: "dialogue", speaker: "ANTONY", text: "This is a slight, unmeritable man, Meet to be sent on errands. Is it fit, The threefold world divided, he should stand One of the three to share it?" },
            { id: "4-1-25", type: "dialogue", speaker: "ANTONY", text: "He shall but bear them as the ass bears gold, To groan and sweat under the business, Either led or driven, as we point the way; And having brought our treasure where we will, Then take we down his load and turn him off.", isImportant: true },
            { id: "4-1-45", type: "dialogue", speaker: "ANTONY", text: "And now, Octavius, Listen great things. Brutus and Cassius Are levying powers. We must straight make head." },
            { id: "4-1-d2", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-4-scene-2",
          number: 2,
          title: "Camp near Sardis.",
          setting: "Drum. Enter Brutus, Lucilius, Lucius, and the Army.",
          content: [
            { id: "4-2-d1", type: "direction", text: "Drum. Enter Brutus, Lucilius, Lucius, and the Army. Titinius and Pindarus meet them." },
            { id: "4-2-25", type: "dialogue", speaker: "BRUTUS", text: "A hot friend cooling. Ever note, Lucilius, When love begins to sicken and decay It useth an enforcèd ceremony. There are no tricks in plain and simple faith; But hollow men, like horses hot at hand, Make gallant show and promise of their mettle.", isImportant: true },
            { id: "4-2-d2", type: "direction", text: "Enter Cassius and his powers." },
            { id: "4-2-35", type: "dialogue", speaker: "CASSIUS", text: "Most noble brother, you have done me wrong." },
            { id: "4-2-d3", type: "direction", text: "They exit into the tent." }
          ]
        },
        {
          id: "act-4-scene-3",
          number: 3,
          title: "Within the tent of Brutus.",
          setting: "Enter Brutus and Cassius.",
          content: [
            { id: "4-3-d1", type: "direction", text: "Enter Brutus and Cassius." },
            { id: "4-3-1", type: "dialogue", speaker: "CASSIUS", text: "That you have wronged me doth appear in this: You have condemned and noted Lucius Pella For taking bribes here of the Sardians." },
            { id: "4-3-10", type: "dialogue", speaker: "BRUTUS", text: "Let me tell you, Cassius, you yourself Are much condemned to have an itching palm, To sell and mart your offices for gold To undeservers.", isImportant: true },
            { id: "4-3-20", type: "dialogue", speaker: "BRUTUS", text: "Remember March; the ides of March remember. Did not great Julius bleed for justice’ sake? ... I had rather be a dog and bay the moon Than such a Roman.", isImportant: true },
            { id: "4-3-40", type: "dialogue", speaker: "BRUTUS", text: "Away, slight man! ... Must I give way and room to your rash choler? Shall I be frighted when a madman stares?" },
            { id: "4-3-75", type: "dialogue", speaker: "BRUTUS", text: "There is no terror, Cassius, in your threats, For I am armed so strong in honesty That they pass by me as the idle wind.", isImportant: true },
            { id: "4-3-105", type: "dialogue", speaker: "CASSIUS", text: "Come, Antony, and young Octavius, come! Revenge yourselves alone on Cassius, For Cassius is aweary of the world— Hated by one he loves, braved by his brother." },
            { id: "4-3-d2", type: "direction", text: "They clasp hands." },
            { id: "4-3-165", type: "dialogue", speaker: "BRUTUS", text: "O Cassius, I am sick of many griefs. ... No man bears sorrow better. Portia is dead.", isImportant: true },
            { id: "4-3-175", type: "dialogue", speaker: "BRUTUS", text: "Impatient of my absence, And grief that young Octavius with Mark Antony Have made themselves so strong—for with her death That tidings came—with this she fell distract And, her attendants absent, swallowed fire.", isImportant: true },
            { id: "4-3-215", type: "dialogue", speaker: "BRUTUS", text: "There is a tide in the affairs of men Which, taken at the flood, leads on to fortune; Omitted, all the voyage of their life Is bound in shallows and in miseries.", isImportant: true },
            { id: "4-3-d3", type: "direction", text: "Enter the Ghost of Caesar." },
            { id: "4-3-325", type: "dialogue", speaker: "GHOST", text: "Thy evil spirit, Brutus. ... To tell thee thou shalt see me at Philippi.", isImportant: true },
            { id: "4-3-d4", type: "direction", text: "They exit." }
          ]
        }
      ]
    },
    {
      id: "act-5",
      number: 5,
      scenes: [
        {
          id: "act-5-scene-1",
          number: 1,
          title: "The plains of Philippi.",
          setting: "Enter Octavius, Antony, and their army.",
          content: [
            { id: "5-1-d1", type: "direction", text: "Enter Octavius, Antony, and their army. Drum. Enter Brutus, Cassius, and their army." },
            { id: "5-1-30", type: "dialogue", speaker: "BRUTUS", text: "Words before blows; is it so, countrymen?" },
            { id: "5-1-65", type: "dialogue", speaker: "CASSIUS", text: "A peevish schoolboy, worthless of such honor, Joined with a masker and a reveler!", isImportant: true },
            { id: "5-1-110", type: "dialogue", speaker: "BRUTUS", text: "Even by the rule of that philosophy By which I did blame Cato for the death... I find it cowardly and vile." },
            { id: "5-1-125", type: "dialogue", speaker: "BRUTUS", text: "Forever and forever farewell, Cassius. If we do meet again, why we shall smile; If not, why then this parting was well made.", isImportant: true },
            { id: "5-1-d2", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-5-scene-2",
          number: 2,
          title: "The field of battle.",
          setting: "Alarum. Enter Brutus and Messala.",
          content: [
            { id: "5-2-d1", type: "direction", text: "Alarum. Enter Brutus and Messala." },
            { id: "5-2-1", type: "dialogue", speaker: "BRUTUS", text: "Ride, ride, Messala, ride, and give these bills Unto the legions on the other side!" },
            { id: "5-2-d2", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-5-scene-3",
          number: 3,
          title: "Another part of the field.",
          setting: "Alarums. Enter Cassius and Titinius.",
          content: [
            { id: "5-3-d1", type: "direction", text: "Alarums. Enter Cassius carrying a standard and Titinius." },
            { id: "5-3-50", type: "dialogue", speaker: "CASSIUS", text: "Caesar, thou art revenged Even with the sword that killed thee. [He dies.]", isImportant: true },
            { id: "5-3-d2", type: "direction", text: "Enter Brutus and Messala." },
            { id: "5-3-105", type: "dialogue", speaker: "BRUTUS", text: "O Julius Caesar, thou art mighty yet; Thy spirit walks abroad and turns our swords In our own proper entrails.", isImportant: true },
            { id: "5-3-110", type: "dialogue", speaker: "BRUTUS", text: "Are yet two Romans living such as these?— The last of all the Romans, fare thee well.", isImportant: true },
            { id: "5-3-d3", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-5-scene-4",
          number: 4,
          title: "Another part of the field.",
          setting: "Alarum. Enter Brutus, Messala, Cato, Lucilius, and Flavius.",
          content: [
            { id: "5-4-d1", type: "direction", text: "Alarum. Enter Brutus, Messala, Cato, Lucilius, and Flavius. Enter Soldiers and fight." },
            { id: "5-4-1", type: "dialogue", speaker: "LUCILIUS", text: "And I am Brutus, Marcus Brutus, I! Brutus, my country’s friend! Know me for Brutus." },
            { id: "5-4-d2", type: "direction", text: "Enter Antony." },
            { id: "5-4-25", type: "dialogue", speaker: "ANTONY", text: "This is not Brutus, friend, but I assure you, A prize no less in worth. Keep this man safe. Give him all kindness." },
            { id: "5-4-d3", type: "direction", text: "They exit." }
          ]
        },
        {
          id: "act-5-scene-5",
          number: 5,
          title: "Another part of the field.",
          setting: "Enter Brutus, Dardanus, Clitus, Strato, and Volumnius.",
          content: [
            { id: "5-5-d1", type: "direction", text: "Enter Brutus, Dardanus, Clitus, Strato, and Volumnius." },
            { id: "5-5-20", type: "dialogue", speaker: "BRUTUS", text: "The ghost of Caesar hath appeared to me Two several times by night... I know my hour is come." },
            { id: "5-5-45", type: "dialogue", speaker: "BRUTUS", text: "Hath almost ended his life’s history. Night hangs upon mine eyes; my bones would rest, That have but labored to attain this hour.", isImportant: true },
            { id: "5-5-d2", type: "direction", text: "Brutus runs on his sword." },
            { id: "5-5-55", type: "dialogue", speaker: "BRUTUS", text: "Caesar, now be still. I killed not thee with half so good a will. [He dies.]", isImportant: true },
            { id: "5-5-d3", type: "direction", text: "Alarum. Enter Antony, Octavius, and their army." },
            { id: "5-5-75", type: "dialogue", speaker: "ANTONY", text: "This was the noblest Roman of them all. ... He only in a general honest thought And common good to all made one of them.", isImportant: true },
            { id: "5-5-80", type: "dialogue", speaker: "ANTONY", text: "His life was gentle and the elements So mixed in him that nature might stand up And say to all the world “This was a man.”", isImportant: true },
            { id: "5-5-d4", type: "direction", text: "They all exit." }
          ]
        }
      ]
    }
  ]
};
