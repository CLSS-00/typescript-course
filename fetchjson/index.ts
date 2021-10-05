import axios from 'axios';
// No need to install typescript & ts-node globablly
// added

const HOST = 'https://jsonplaceholder.typicode.com';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

axios
  .get(`${HOST}/todos/1`)
  .then(({ data }: { data: Todo }) => {
    console.log(data);
    // logTodo(id, title, completed);
    logTodoObj(data);
  })
  .catch(console.log);

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is completed: ${completed}
    `);
};
const logTodoObj = ({ id, title, completed }: Todo) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of: ${title}
    Is completed: ${completed}
    `);
};
const s =
  'Therese Devine; Beth Murphy; Rachael Wetherington; Maureen Stewart; Abraham Aranda; Abel Vallejo; Adolfo Amilcar Mendoza Sanchez; Alan Garcia; Alberto Bustamante; Alejandra Ramirez; Alejandro de Jesus Lizarraga Molina; Alver Levid Padilla Avila; Andres Catzin May; Antonio Ivan Temimilpa Porras; Antonio Campos; Jose Anwar Pinto Aviles; Audre Mirell Chan Cambranes; Carlos Arroyo Berny; Carlos Acevedo; Cesar Rivera Mesquita; Claudio Herrera; Daniel Gomez; Eder Palacios; Eder Enrique Herrera Esquivel; Efrain Chacon Gutierrez; Eloisa Azueta Estrada; Emir Humberto Garcia Sansores; Emmanuel Mendoza; Eric Fernando Mesina Covarrubias; Felipe Angeles Turriza Cauich; Fidel Cruz; Gerardo Dominguez; Gustavo Emmanuel Vega Lugo; Gustavo Fuentes Zamora; Ismael Giovanhy Lopez Bates; Ivan Gabriel Gallardo Lopez; Alfonso Joel Gallegos Lopez; Jorge Alejandro Apanco Vazquez; Jorge Antonio Arcega Dieguez; Jorge Herrera; Jorge Carlos Cob Sarabia; Jose Francisco Adan Santillan; Jose Maria Martinez Rivero; Jose Manuel Salazar Nuñez; Jose Luis Castañeda Bates; Jose Gutierrez; Jose Luis Pacheco Rejon; Jose Felipe Castellot del Razo; Jose de Jesus Corona Tapia; Maria Josefina Poot Ferrera; Juan Manuel Ricardo Gaspar; Juan Pablo Limon Moreno; Juan Manuel Mata Lopez; Keren Iveth Teh Granados; Luis Gonzalez Ramayo; Luis Antonio Sanchez Rivera; Manuel Alejandro Amaya Moguel; Jose Marcos Galeana Gama; Miguel Alejandro Hernandez Zarasua; Miguel Cetz; Noe Contreras Cruz; Jaime Paris Bello Esquivel; Ramon Valdez Bermejo; Ricardo Huerta; Robertho Perez Macias; Roberto Jose Moreno Acevedo; Rodrigo Alfaro Caballero; Jose Ruben Rodriguez Medina; Russel Bernabe Varguez Dzul; Salim Jorge Ortega Lopez; Santiago Rodriguez Olalde; Saul Jacinto; Socorro Cheluja; Victor Manuel Hernandez Baruch; Victor Guillermo Peña Guerrero; Yasser Tapia Tussell; Luz Martinez; Rodrigo Mansilla; Allem Alonso Bobadilla Castro; Ghersain Azael Rivera Corona; Carlos Pavel Sandoval Peralta; Christian Eduardo Ruiz Machuca; Daniel Alejandro Perez Lam; Daniel Alejandro Dzul Sima; Danny Alexander Beltran Pacheco; Jesus David Chacon Lopez; David Alberto Gallegos Cobos; Fernando Enrique Garcia Sosa; Guillermo Eduardo Villicaña Soberanes; Idalia Evangelista Campos; Ivan Rodriguez Contreras; Jose Humberto Cruz Valencia; Juan Espinosa Mendez; Luis Esperon; Manuel Fermin Avila Basulto; Manuel Fragoso Bargas; Manuel Jesus Ley Gonzalez; Maria Salome Ek Chale; Mario Pech Solis; Martha Beatriz Rodriguez Barrales; Midori Alejandra Vidal May; Monica Guadalupe Benavides Cortez; Orlando Palacios Sanchez; Ramiro Antonio Vallejo Jimenez; Rocio Martin; Yael Fernandez Muciño; Erubey Lechuga; Ivan Diego; Guillermo Magana; ';
console.log(s.split(';').filter((e) => e.toLowerCase().includes('ivan')));
