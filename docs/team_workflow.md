# DriveSense AI - Team Workflow

## 1. Team Structure

The project team consists of 5 members.

| Member | Role | Responsibility |
|---|---|---|
| Member 1 | Frontend Developer | Dashboard UI, visualization, user interface |
| Member 2 | Backend Developer | APIs, server, database integration |
| Member 3 | AI Developer | ML model, prediction system, AI integration |
| Member 4 | Hardware/Data Developer | Sensor data generation, vehicle communication |
| Member 5 | Team Lead | Architecture, integration, documentation, coordination |

---

# 2. Development Workflow

The project will follow a modular development approach.

Each member works on their own module.

```
Frontend
    |
    |
Backend API
    |
    |
AI Model
    |
    |
Vehicle Data Source
```

Modules will communicate through defined APIs.

---

# 3. Git Branch Strategy

Main branch:

```
main
```

Purpose:

Contains stable and tested code.

---

Individual branches:

```
frontend-dev
backend-dev
ai-dev
hardware-dev
```

Each member develops on their own branch.

---

# 4. Git Rules

Before starting work:

1. Pull latest changes.

Command:

```
git pull origin main
```

---

After completing a feature:

1. Add changes.

```
git add .
```

2. Commit.

```
git commit -m "Feature description"
```

3. Push.

```
git push origin branch-name
```

---

# 5. Integration Process

Changes will be merged into main only after testing.

Flow:

```
Member Branch
       |
       v
Pull Request
       |
       v
Code Review
       |
       v
Merge into Main
```

---

# 6. Communication Rules

Team members must:

- Follow the API contract.
- Inform before changing shared files.
- Avoid modifying another member's module.
- Document major changes.
- Test before merging.

---

# 7. Project Milestones

## Phase 1 - Planning

Completed:

- Architecture design
- API contract
- Database schema
- AI workflow

---

## Phase 2 - Development

Tasks:

Frontend:
- Create dashboard

Backend:
- Build APIs
- Connect database

AI:
- Train prediction model

Hardware:
- Generate sensor data

---

## Phase 3 - Integration

Tasks:

- Connect all modules
- Test complete system
- Fix communication issues

---

## Phase 4 - Final Deployment

Tasks:

- Final testing
- Documentation
- Presentation preparation

---

# 8. Team Lead Responsibility

Member 5 will:

- Maintain project architecture
- Coordinate members
- Resolve integration issues
- Review progress
- Maintain documentation