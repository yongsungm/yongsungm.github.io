---
layout: project
type: project
image: projects/public-transport-network-science/images/lit_review.png
title: Network Science Approaches to Improving Public Transportation
permalink: projects/public-transport-network-science/
# All dates must be YYYY-MM-DD format!
date: 2024-12-21
labels:
  - Network Science
  - Public Transportation
  - Literature review

summary: An analysis of how public transportation might be improved using network science
---


<style>
  .pdf-container {
    position: relative;
    width: 100%;
    height: 80vh; /* Use viewport height for better responsiveness */
    min-height: 600px; /* Minimum height for readability */
    max-height: 1000px; /* Maximum height to prevent excessive size */
    border: 1px solid #ddd;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .pdf-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .pdf-container {
      height: 70vh;
      min-height: 400px;
    }
  }

  @media (max-width: 480px) {
    .pdf-container {
      height: 60vh;
      min-height: 300px;
    }
  }

  /* For very tall screens */
  @media (min-height: 1200px) {
    .pdf-container {
      height: 85vh;
    }
  }
</style>

<div class="pdf-container">
  <iframe src="{{ site.baseurl }}/projects/public-transport-network-science/masuda_final_project.pdf"></iframe>
</div>
<br>
<br>