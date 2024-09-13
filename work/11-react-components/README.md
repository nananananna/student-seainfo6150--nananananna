# React Components Assignment

**Due: Thu Nov 30, 11:59pm PT**

## Submission Instructions

* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'react-components' (`git checkout -b react-components`)
* Create a React project in this directory using Vite
* Add/Delete/Modify the necessary files to have the required features
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)

## Goal

Create a react project that:
- Is a Single Page Application
- Has 3 "pages" from the perspective of the user
- Have some way for the user to change which "page" is shown 
- Write a Button component
- This Button component is used multiple times (see below)
- This Button component accepts props that change the rendered appearance
- You will have a modal window using `<dialog>`

## Setup Requirements

- Create a react project named "components" inside this directory using Vite
- Modify the files in the src/ directory inside components/ to meet the requirements
- For css, you can add/modify as many css files as you want in /src, including src/index.css that is also applied to the output.

## Functional Requirements

- Your app should show at least 3 different "pages"
  - "pages" here means the visible appearance, not actual .html files
  - All pages show the SAME header and footer
  - Each page has some navigation that allows you to to the other "pages"
  - One "page" will show mostly text content (text of your choice)
  - One "page" will show a set of cards (content of your choice)
    - At least one card should include a link that leads to a different "page"
      - The other cards do not need to have links
  - One "page" should have "panels" (Text and images side-by-side)
- There should be Header and Footer components
- There should be at least one Component for each of the "pages"
  - Those components may use additional Components if you wish
- Create a Component (outside of App.jsx) that includes and uses a `<dialog>` element for a modal window
- Create a Button component Use your Button component in 3 different ways
  - At least once with `type="button"` and `visual="link"` props in addition to any other props
  - At least once with `type="button"` and `visual="button"` props in addition to any other props
  - At least once with `type="submit"` and `visual="link"` props in addition to any other props
  - The `visual` and `type` props can default to a value, but must be able to be overridden by passing the appropriate prop
- A Button component should render a `<button>` with the matching `type` attribute
- The "submit" option above should be done in a form in a `<dialog>`-based Modal
- Clicking/submitting with ANY of the above options should NOT navigate the page
- You choose how, but each of the above options should visually let the user know they clicked the button
  - This can be as simple as a conditionally rendered message in the HTML saying they clicked the button
  - Hint: This means you will need to pass a function as a prop to handle onClick for the generated button
  - You may use instances of the Button component to open/close the modal.  These can count towards the 3 required Buttons.
- This assignment does not require a "complete" looking web page, but you can choose to include that

## Visual Requirements

- A Button component with a `visual="button"` prop will have styling to look like a button
- A Button component with a `visual="link"` prop will have styling to look like a link
- As mentioned in Functional Requirements, each Button must change the state so that the user can easily tell that clicking the button DID something
  - This involves the button changing a value in state and that state being used to conditionally render text or a component
- In addition to meeting the _functional_ requirements, try to make your page an attractive webpage that would make sense to a user.  Provide a concept/purpose for the page that explains the functionality.

## Accessibility Requirements

- Any links/buttons and navigation must be usable by both mouse and keyboard
- Any images should have useful alt attributes (INCLUDING logos)
  - There is no specific requirement for images in this assignment, but you may want to use them to create an attractive web app
- You should use Semantic HTML and other best practices from class

## Adaptive/Responsive Requirements

- No special requirements - You can provide such functionality, but there is no requirement for this assignment

## Restrictions

- Do not use table, CSS table-cell, floats, or other related concepts for layout of the page structure (floats for text around images is fine)
- Do NOT use alert(), prompt() or similar
- Do not use CSS Modules, styled-components, or other alternate forms of CSS organization
- Do not use outside JS or CSS libraries outside of what is installed by Vite
  - Exception: CSS from css.gg can be copied into your CSS, but you must add a comment indicating where the CSS came from and under what license.  Make sure any copied/adapted CSS is distinct from CSS that you fully create.
- Follow the methods and best practices used in class or described in this README

