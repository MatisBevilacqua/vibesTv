import express from 'express';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();
const app = express();
const PORT = 3000;

app.use(express.json());

const expectedToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

const verifyToken = (req: any, res: any, next: any) => {
  const token = req.headers.authorization;

  if (token !== expectedToken) {
    return res.status(401).json({ error: 'Token invalide' });
  }

  next();
};

// Route pour ajouter une nouvelle News
app.post('/news', verifyToken, async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const news = await prisma.news.create({
      data: {
        title,
        description,
        link,
        image
      }
    });
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout de la News' });
  }
});

// Route pour supprimer une News par son ID
app.delete('/news/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.news.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.json({ message: 'News supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de la News' });
  }
});

// Route pour obtenir toutes les News
app.get('/news', async (req, res) => {
  try {
    const news = await prisma.news.findMany();
    res.json(news);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des News' });
  }
});

// Route pour ajouter une nouvelle Focus
app.post('/focus',verifyToken, async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const focus = await prisma.focus.create({
      data: {
        title,
        description,
        link,
        image
      }
    });
    res.json(focus);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout du Focus' });
  }
});

// Route pour supprimer une Focus par son ID
app.delete('/focus/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.focus.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.json({ message: 'Focus supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression du Focus' });
  }
});

// Route pour obtenir toutes les Focus
app.get('/focus', async (req, res) => {
  try {
    const focus = await prisma.focus.findMany();
    res.json(focus);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des Focus' });
  }
});


// Route pour ajouter une nouvelle Emission
app.post('/emission', verifyToken, async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const emission = await prisma.emission.create({
      data: {
        title,
        description,
        link,
        image
      }
    });
    res.json(emission);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de l\'ajout de l\'Emission' });
  }
});

// Route pour supprimer une Emission par son ID
app.delete('/emission/:id', verifyToken, async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.emission.delete({
      where: {
        id: parseInt(id)
      }
    });
    res.json({ message: 'Emission supprimée avec succès' });
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la suppression de l\'Emission' });
  }
});

// Route pour obtenir toutes les Emissions
app.get('/emission', async (req, res) => {
  try {
    const emission = await prisma.emission.findMany();
    res.json(emission);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des Emissions' });
  }
});

// Route pour contacter
app.post('/contact', async (req, res) => {
  try {
    const { name, email, link,message } = req.body;
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        link,
        message
      }
    });
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors du contact' });
  }
});  

// Récupérer les contact
app.get('/contact', verifyToken ,async (req, res) => {
  try {
    const contact = await prisma.contact.findMany();
    res.json(contact);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des Contact' });
  }
});


app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

