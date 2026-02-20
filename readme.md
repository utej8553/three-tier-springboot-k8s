# 🚀 3-Tier Spring Boot Application on Minikube (Kubernetes)

## 📌 Project Overview

This project demonstrates a **3-tier web application architecture** deployed on **Kubernetes using Minikube**.

The application consists of:

- 🎨 **Frontend** – React (Vite)
- ⚙️ **Backend** – Spring Boot REST API
- 🗄 **Database** – PostgreSQL
- ☸️ **Container Orchestration** – Kubernetes (Minikube)

It showcases containerization, service communication, persistent storage, and deployment of a multi-tier application inside a Kubernetes cluster.

---

## 🏗 Architecture


Browser
↓
Frontend (React - NodePort)
↓
Backend (Spring Boot - ClusterIP)
↓
PostgreSQL (Persistent Volume via PVC)


---

## 🧱 Tech Stack

| Layer       | Technology |
|------------|------------|
| Frontend   | React (Vite) |
| Backend    | Spring Boot |
| Database   | PostgreSQL |
| Containers | Docker |
| Orchestration | Kubernetes (Minikube) |

---

## ⚙️ Kubernetes Components Used

- Deployments
- Services (ClusterIP & NodePort)
- PersistentVolumeClaim (PVC)
- Environment variables for configuration
- Internal Kubernetes DNS for service discovery
- Default StorageClass (Minikube)

---

## 💾 Persistent Storage in Minikube

In Minikube, you usually **do NOT need to manually create a PersistentVolume (PV)**.

You only need to create a:


PersistentVolumeClaim (PVC)


Kubernetes automatically provisions the PersistentVolume (PV) dynamically.

This works because Minikube comes with a **default StorageClass** enabled, which handles dynamic volume provisioning automatically.

This simplifies database storage setup for local development.

---

## ▶️ Setup & Deployment

### 1️⃣ Start Minikube

```bash
minikube start
```
2️⃣ Deploy PostgreSQL
```sh
kubectl apply -f postgres-deployment.yml
kubectl apply -f postgres-service.yml
kubectl apply -f postgres-pvc.yml
```
3️⃣ Deploy Backend
```sh
kubectl apply -f backend-deployment.yml
kubectl apply -f backend-service.yml
```

Backend connects to database using:
```sh
jdbc:postgresql://postgres:5432/demo_db
```
4️⃣ Deploy Frontend
```sh
kubectl apply -f frontend-deployment.yml
kubectl apply -f frontend-service.yml
```

Frontend communicates with backend via:
/api/demo
