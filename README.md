# LaBook :globe_with_meridians: :speech_balloon:
The backend of a social network.

LaBook is a back-end development of an imaginary social network. It is an activity result of Labenu's full-stack development course. 
This back-end consists of an API constructed with Typescript and MySQL languages, using NodeJS as development environment, Express as NodeJS framework for API construction and communicating with Database through Knex's query builder.

The back-end performs the following functions:
:small_orange_diamond: SignUp and Login of users through token authentication (both access and refresh token);
:small_orange_diamond: bilateral friendship interaction;
:small_orange_diamond: feed requisition returning only friends posts or posts filtered by posts types;
:small_orange_diamond: feed pagination;
:small_orange_diamond: posting of texts and url based pictures requisition;
:small_orange_diamond: comment requisition;


This was a collective effort imagined, executed and revised by Natalia Acedo, Gabriela Salvo and me.

## Tools and technologies :wrench:

<p align="center">
<img width="35px" src="https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.jpg"/>
<img width="35px" src="https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png"/>
<img width="40px" src="https://github.com/Meira-JH/portfolio/blob/master/portfolio-web/src/img/mysqlicon.png"/>
</p>

<p  style="font-size:5px; text-align:left">
<i>Icons by <a href="https://github.com/jalbertsr/logo-badge-images">Joan Albert</a></i>
</p>

## The app  :iphone:

[Web Deploy]()

[Documentation]()


## Running the app :running:

On your terminal, type:

```
git clone https://github.com/Meira-JH/laBook-backend
```

Install dependencies:
```
npm install
```

Execute the application in development mode:
```
npm run dev 
```

## Code architecture :computer:

This code was designed concerned with clean code, TS best practices and Model-View-Controller (MVC) design pattern. The source foulder is devided in:

:small_blue_diamond: **contoller layer**: folder containing Typescript files responsible for receiving requisitions data and directing them to the necessary layers;

:small_blue_diamond: **business layer**: folder containing Typescript files responsible for validations and the communication with the data layer;

:small_blue_diamond: **data layer**: folder containing Typescript files responsible for communicating with the Database through queries;

:small_blue_diamond: **middleware layer**: folder containing tools for better functioning of the application;

:small_blue_diamond: **model layer**: folder containing interfaces for a better and more secure data processing;

:small_blue_diamond: **routes layer**: folder containing routes to communicate with ;

:small_blue_diamond: **services layer**: folder containing data processing (token generator, id generator and so on);


## Contributing :nerd_face:

This was a collective effort imagined, executed and revised by Natalia Acedo, Gabriela Salvo and me.

Support by:
<p align="center">
<img src="https://uploads-ssl.webflow.com/5e790d30d198385b09366d8f/5eb17dfd4a07be86d2b8951e_Labenu_principal_slogan.png"/>
</p>

## License :page_facing_up:
[MIT License](https://choosealicense.com/licenses/mit/)

