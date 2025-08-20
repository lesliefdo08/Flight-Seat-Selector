# Flight-Seat-Selector
As part of my Coursera responsive seat selector UI in HTML, CSS, and JS course, I have designed a page to select seats for a particular flight.
Overview
This project is a modern, responsive flight booking web page designed to offer users an intuitive and engaging experience to select flights, choose seats, pick travel dates, and view pricing dynamically. The interface combines sleek design aesthetics with practical functionality, aiming to rival professional airline websites.

Features
Single input fields for "From" and "To" locations with a large international city and airport list for easy selection.

Date picker to select travel dates with validation to prevent past date selections.

Interactive seat map replicating an airplane cabin layout, with available, selected, and occupied seat states.

Dynamic pricing that updates in real-time based on chosen origin, destination, and number of seats selected.

Responsive design optimized for mobile, tablet, and desktop screens with smooth transitions and accessibility in mind.

Layered, animated background using multiple sky/cloud images for a modern and immersive look.

Styled custom scrollbars consistent with the dark-themed design to enhance user engagement.

Local storage integration (optional extension) could be added to persist user selections (currently available seats reset on page reload).

Technologies Used
HTML5

CSS3 (Flexbox, transitions, animations)

JavaScript (DOM manipulation, event handling)

Google Fonts for modern typography

Structure
index.html — Main HTML structure including input fields, seat layout, legend, and summary section.

styles.css — Styling for layout, responsiveness, animations, backgrounds, and custom scrollbar.

script.js — Handles interactive functionality: seat selection, price calculation, validation, and booking simulation.

How to Use
Open index.html in any modern web browser.

Select the origin and destination cities from the input fields (autocomplete supported).

Pick the travel date (today or any future date).

Click on available seats to select or deselect.

See the live calculation of total price based on selected criteria.

Click Book Now to confirm and view booking details.

Customization
Update the basePrices object in script.js to adjust pricing per city.

Add or remove cities in the datalist inside index.html to change flight options.

Replace background images with your own for tailored aesthetics by updating CSS .background-layer.

Enhance by integrating with an API or backend for real bookings and seat management.

Responsive & Accessibility Notes
Designed first for mobile-friendly responsiveness with fluid layouts and scalable UI.

Uses semantic HTML elements and ARIA labels for improved accessibility.

Keyboard navigation supported for seat selection and form inputs.

Future Enhancements
Persist selections via localStorage or backend storage.

Enhanced search/autocomplete for city inputs.

User authentication and payment integration.

Multi-leg flight options and passenger details.

Accessibility audits and keyboard focus management improvements.
