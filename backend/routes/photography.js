const express = require('express');
const router = express.Router();

// Photography gallery data
const photoGallery = [
  {
    filename: "468646440_17936655428944893_7509135090935189598_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "343992219_177325821532978_5717638195834194623_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "344551174_251455580748429_1306517930164923290_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "344551437_258245773307347_8201155647119979062_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "468468371_17936662667944893_2934671188529144460_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "468534948_17936662769944893_5200617860650749917_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "468589628_17936662748944893_3394555438534651684_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "468631434_17936662721944893_467031268218679813_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "468636033_17936662802944893_3301526694209351755_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "343764454_253295190545938_7232388711521733149_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "379144100_17880040289944893_5838213105233392185_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "379180061_17880040298944893_5806981374134411631_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "464197518_1070894688046899_100191228127106407_n.heic",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "464578980_421442374334868_4541118366697840996_n.heic",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "464763301_512287548298920_6728097189822872362_n.heic",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "370360854_1407304003168976_989827643006898521_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "370717900_967044241049091_5715068842131214150_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "377957795_17880138881944893_8350813131163337920_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "378386506_17880138860944893_4706844385474141978_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "378386585_17880138890944893_4606621962207709997_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "338230374_237668175326306_7808895535459229091_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "338724253_896534131604832_3198426206516570979_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "340687911_913669476516342_2516605092478236339_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "345021714_187407430865926_6128676970177016447_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "347459148_1199949680709713_5873771730978605721_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "347641952_183978434232073_1353891339375020397_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "369956289_643250864242872_616285542558747926_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "369994537_836828411171713_1564340975655020105_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  },
  {
    filename: "370003826_321926486944342_6341356255380684349_n.jpg",
    title: "Frozen Still",
    description: "A tree frozen in winter's embrace, framed by the fading colors of twilight.",
    tags: ["#photography", "#winter", "#landscape", "#serene"]
  },
  {
    filename: "370569547_872363814484127_3710562338195829928_n.jpg",
    title: "Urban Echoes",
    description: "Muted alleyways and empty paths resonate with a city's silent rhythm.",
    tags: ["#photography", "#city", "#night", "#urban"]
  },
  {
    filename: "370615765_804750717859193_9213318328654467694_n.jpg",
    title: "Golden Hours",
    description: "A glowing sunset bathing the horizon in gentle gold.",
    tags: ["#photography", "#lifestyle", "#sunset", "#goldenhour"]
  },
  {
    filename: "376625663_325415719848426_157055517698654095_n.jpg",
    title: "Portrait of Solitude",
    description: "Framed in natural light, a quiet figure embodies peaceful introspection.",
    tags: ["#photography", "#mood", "#minimal", "#portrait"]
  },
  {
    filename: "377769853_1780716382369939_3007038905095385746_n.jpg",
    title: "Nature's Script",
    description: "Every branch a sentence, every leaf a word — telling a forest's silent story.",
    tags: ["#photography", "#trees", "#forest", "#nature"]
  },
  {
    filename: "401145473_17888593919944893_3391469059670294431_n.jpg",
    title: "Skyline Pulse",
    description: "City lights blink in the haze of dusk, where buildings breathe with stories untold.",
    tags: ["#photography", "#city", "#architecture", "#twilight"]
  },
  {
    filename: "401271979_17888593931944893_3191792138330606467_n.jpg",
    title: "Lens on Culture",
    description: "A candid capture of street energy and everyday essence.",
    tags: ["#photography", "#street", "#lifestyle", "#culture"]
  },
  {
    filename: "401291406_17888593910944893_3051471909535346596_n.jpg",
    title: "Whispers of Light",
    description: "Soft shadows dance on surfaces touched by natural light through leaves.",
    tags: ["#photography", "#light", "#nature", "#dreamy"]
  },
  {
    filename: "468551347_17936657042944893_4145983589040278334_n.jpg",
    title: "Highway Drift",
    description: "A sleek Porsche captured in motionless power, resting under an urban skyline.",
    tags: ["#photography", "#urban", "#street", "#cars"]
  }
];

// Get all photos
router.get('/', async (req, res) => {
  try {
    const { tag, limit } = req.query;
    
    let filteredPhotos = photoGallery;
    
    // Filter by tag if provided
    if (tag) {
      filteredPhotos = photoGallery.filter(photo => 
        photo.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      );
    }
    
    // Apply limit if provided
    if (limit) {
      filteredPhotos = filteredPhotos.slice(0, parseInt(limit));
    }
    
    res.json({
      success: true,
      data: filteredPhotos,
      total: filteredPhotos.length,
      filters: { tag, limit }
    });
  } catch (error) {
    console.error('Photography fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch photography data'
    });
  }
});

// Get available tags
router.get('/tags', async (req, res) => {
  try {
    const allTags = Array.from(new Set(
      photoGallery.flatMap(photo => photo.tags.filter(tag => tag !== "#photography"))
    )).sort();
    
    res.json({
      success: true,
      data: allTags,
      total: allTags.length
    });
  } catch (error) {
    console.error('Tags fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch tags'
    });
  }
});

// Get single photo by filename
router.get('/:filename', async (req, res) => {
  try {
    const { filename } = req.params;
    const photo = photoGallery.find(p => p.filename === filename);
    
    if (!photo) {
      return res.status(404).json({
        error: 'Photo not found'
      });
    }
    
    res.json({
      success: true,
      data: photo
    });
  } catch (error) {
    console.error('Single photo fetch error:', error);
    res.status(500).json({
      error: 'Failed to fetch photo'
    });
  }
});

module.exports = router; 