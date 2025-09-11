#!/usr/bin/env node

/**
 * Bulk ingestion script to add portfolio content to pgvector database
 * Run with: node scripts/ingest-content.js
 */

const content = {
  // About section
  about: {
    docId: 'about-section',
    content: `Awais Nasir is a Senior Software Engineer based in Doha, Qatar. He has extensive experience in developing and leading Web apps, Mobile apps and Server Side Services. He is an enthusiastic team player who values clear communication, embraces feedback, and is always eager to learn and grow. He has worked in Software Services and Product Based Companies with deep understanding of the entire Software Development process from front-end to back-end development. Outside of work, he enjoys playing Chess and Cricket, watching movies and reading books.`,
    source: 'about',
    metadata: { section: 'about', type: 'personal_info' }
  },

  // Skills section
  skills: {
    docId: 'technical-skills',
    content: `Technical Skills: Frontend - HTML5, CSS3, JavaScript, TypeScript, React, NextJS, Angular, Redux, RxJS, GraphQL, Material-UI. Backend - Node.js, NestJS, ExpressJS, Python, PostgreSQL, MySQL, MongoDB, Firebase, TypeORM, Sequelize. Mobile - Ionic, Cordova, Capacitor. DevOps - AWS, Docker, Kubernetes. Testing - Jest.`,
    source: 'skills',
    metadata: { section: 'skills', type: 'technical_stack' }
  },

  // Projects
  projects: [
    {
      docId: 'project-daleel-aqar',
      content: `Daleel Aqar is a leading real estate enterprise in Jordan. I provided end-to-end guidance throughout the entire product lifecycle from initial planning to successful deployment. The platform enables users to buy, sell, and rent properties. Tech stack: Angular, NestJS, GraphQL, PostgreSQL, AWS, Nx.dev monorepo architecture. Key features: Comprehensive Real Estate Platform, User-friendly Interface, Scalable Architecture, Modern Tech Stack, Monorepo Development.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'Daleel Aqar', url: 'https://www.daleelaqar.com/#/nav/home' }
    },
    {
      docId: 'project-authentic-influencers',
      content: `Authentic Influencers platform connects Instagram and TikTok influencers with brands for collaboration opportunities. It offers a complete environment where both parties can showcase their pitches, negotiate terms, and finalize business deals seamlessly. I mentored the development team on engineering best practices and successfully led the project through to full deployment on AWS. Tech stack: React, NextJS, Ruby on Rails, AWS, PostgreSQL, Docker, Kubernetes.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'Authentic Influencers', url: 'https://authenticstats.com/' }
    },
    {
      docId: 'project-performance-reporting',
      content: `Performance Reporting app provides stakeholders with clear insights into Afiniti software performance across client environments, using key metrics to improve results. Features: User-friendly dashboard, Live preview of each Account/Client/Tenant, Customizable reports, Role Based Access Control. Tech stack: React, NextJS, Material-UI, NestJS, MySQL.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'Performance Reporting', url: 'https://portal.afiniti.com/' }
    },
    {
      docId: 'project-wfm',
      content: `Workforce Management Software for Contact Centers. Features: Scheduling of Agents, TimeOff Requests Modules, Work Plans and Work Plan Rotations of Agents, Forecasting, Various Live and historical reporting, ETL (export,transpose,load) based Module to load and sync the historical data from Afiniti dbs to Client Environments. Tech stack: React, NextJS, PostgreSQL, NodeJS, C#, Vb.net, Material-UI, NestJS, TypeORM.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'WFM' }
    },
    {
      docId: 'project-visenya',
      content: `Visenya platform automates Data Pipelines for AI and Data Integration Teams at Afiniti. Features: Automated Data Pipelines, Data Integration, AI and Data Integration Teams. Tech stack: React, NextJS, NodeJS, NestJS, Python, Airflow, Postgres, Docker.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'Visenya' }
    },
    {
      docId: 'project-wfm-historical-connectors',
      content: `WFM Historical Connectors - Architected an ETL application to export, transpose, and load historical data from Afiniti databases into client environments, streamlining data synchronization and integration. Fueled product user adoption rate by customizing the app functionality to meet the unique requirements, configurations, and environments of diverse clients. Features: ETL (export,transpose,load), Data Integration, Data Migration, Data Synchronization. Tech stack: C#, Vb.net, SQL, PostgreSQL, Docker, MySQL, Greenplum.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'WFM Historical Connectors' }
    },
    {
      docId: 'project-db-utility',
      content: `DB Utility service for Afiniti's internal teams which enabled the smooth deployment of database schemas, tables, stored procedures, functions, views, and triggers on both production and staging servers. Managed and safeguarded database server data through robust backup and log tracking functionality. Features: Database Deployment, Database Backup, Database Logs, Database Schema Management. Tech stack: Bash Scripting, SQL, PostgreSQL, MySQL, Greenplum.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'DB Utility' }
    },
    {
      docId: 'project-aduro',
      content: `Aduro hybrid app using Ionic1 to interface with hardware controllers which enabled remote management of devices such as DHW systems, hoppers, and boilers. Features: Remote Management, Hardware Controllers, DHW Systems, Hoppers, Boilers, IOT. Tech stack: Ionic1, Cordova, AngularJS, NodeJS, Ionic4, Capacitor, Angular, TypeScript. Available on Google Play Store.`,
      source: 'portfolio',
      metadata: { section: 'portfolio', type: 'project', project: 'Aduro', url: 'https://play.google.com/store/apps/details?id=com.nbe.android.adurohybrid1&hl=en' }
    }
  ],

  // Experience summary
  experience: {
    docId: 'experience-summary',
    content: `Awais Nasir is a Senior Software Engineer with extensive experience in full-stack development. He has worked at Afiniti where he developed various enterprise applications including Workforce Management Software, Performance Reporting systems, Data Pipeline automation tools, and Database utility services. He has also provided consulting services for real estate platforms and influencer marketing platforms. His expertise spans React, Angular, Node.js, Python, PostgreSQL, AWS, and various other modern technologies. He has experience with both frontend and backend development, database management, DevOps practices, and team leadership.`,
    source: 'experience',
    metadata: { section: 'experience', type: 'career_summary' }
  }
};

async function ingestContent() {
  const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000';
  
  console.log('🚀 Starting content ingestion...');
  
  try {
    // Ingest about section
    console.log('📝 Ingesting about section...');
    await fetch(`${baseUrl}/api/embeddings/upsert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content.about)
    });
    
    // Ingest skills
    console.log('🛠️  Ingesting technical skills...');
    await fetch(`${baseUrl}/api/embeddings/upsert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content.skills)
    });
    
    // Ingest projects
    console.log('💼 Ingesting projects...');
    for (const project of content.projects) {
      console.log(`   📁 ${project.metadata.project}...`);
      await fetch(`${baseUrl}/api/embeddings/upsert`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project)
      });
    }
    
    // Ingest experience
    console.log('🎯 Ingesting experience summary...');
    await fetch(`${baseUrl}/api/embeddings/upsert`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(content.experience)
    });
    
    console.log('✅ Content ingestion completed successfully!');
    console.log(`📊 Total documents ingested: ${2 + content.projects.length} documents`);
    
  } catch (error) {
    console.error('❌ Error during ingestion:', error);
    process.exit(1);
  }
}

// Run the ingestion
ingestContent();
