# Motorsport Performance LMS

<img width="1893" height="900" alt="image" src="https://github.com/user-attachments/assets/c66b41ee-3d40-4d4b-9c64-0016514d551e" />


This is a **frontend Learning Management System (LMS)** built with **React + TypeScript**.
The idea is to simulate a structured training platform for motorsport drivers where users progress through learning modules like technical skills, physical training, mental performance, and race strategy.

The learning structure is loosely inspired by the **F1 Academy driver development guidebook** (women in motorsport). I used the general idea of the development pathway as inspiration only. The content in this project is **dummy data and not intended for commercial use**, since this is purely a frontend learning/portfolio project.

---

## Tech Stack

* **React**
* **TypeScript**
* **React Router**
* **Tailwind CSS**
* **Radix UI primitives**
* **Framer Motion** (animations)
* **Sonner** (toast notifications)
* **Lucide Icons**
* **cn utility** for merging Tailwind classes

The UI is built using **small reusable UI primitives / building blocks** instead of large component frameworks.

---

## Project Structure

Since this is a frontend-only project, the data is stored locally.

```
src
 ├─ components
 ├─ hooks
 ├─ pages
 ├─ data
 │   └─ lmsData.ts
 └─ lib
```

The **data folder** contains:

* interfaces (`Lesson`, `Module`, etc.)
* dummy course data
* dashboard data (progress, goals, activity)
* user profile data

---

## App Flow

The user flow is simple:

```
Dashboard
   ↓
Modules Page
   ↓
Module Detail
   ↓
Lesson Page
   ↓
Individual Development Program (IDP) Page
   ↓
Progress Page
   ↓
Profile Page
```

Each module contains multiple lesson types:

* video
* reading
* quiz
* exercise
* reflection

The lesson page dynamically renders the correct UI depending on the lesson type.

---

## Why I Built This

I love motorsport and I spend a lot of time learning about it. When I discovered **F1 Academy**, I found that they have a development guidebook for drivers. That inspired the structure of this project.

Since I'm a software engineer and I want to work in motorsport one day, I decided to start with what I can build right now — a frontend platform that simulates a driver development LMS.

It's a small step, but hopefully **one step closer to that goal**.
